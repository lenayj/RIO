import React, { PureComponent } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import Dropzone from 'react-dropzone';
import CanvasDraw from "react-canvas-draw";

import '../css/newCase.css';


class NewCasePrescription extends PureComponent {

    constructor(props) {
        super(props);
        this.upperImage= React.createRef();
        this.lowerImage = React.createRef();
        console.log(props);
        
        this.onDrop = (files) => {
          this.setState({files})
          //console.log(files)
        };

        this.canvasDrawDataStack=[];
            
        this.state = {
          files: [],
          color: "black",
          width: 616.33,
          height: 382,
          appliance_types: new Map(),
          brushRadius: 3,
          lazyRadius: 0,
          canvasDrawData:null,
          canvasElement:null
        };

        this.setState(this.state.appliance_types,this.state.appliance_types.set("U",""));
        this.setState(this.state.appliance_types,this.state.appliance_types.set("L",""));

        this.toggleLowerApplianceImages = this.toggleLowerApplianceImages.bind(this);
        this.toggleUpperApplianceImages = this.toggleUpperApplianceImages.bind(this);
    }

      toggleLowerApplianceImages = (event) => {
        if(this.state.appliance_types.get("L") === event.target.id){
            //console.log("GOD are you there?");
            this.lowerImage.current.src="";
            this.setState({appliance_types:this.state.appliance_types.set("L","")});
        }
        else{
            this.setState({appliance_types:this.state.appliance_types.set("L",event.target.id)});
            this.lowerImage.current.src="/images/appliance/"+ event.target.id + ".png";
            //console.log(this.lowerImage);
        }
        this.props.submitted(this.canvasDrawDataStack,this.saveableCanvas,this.state.appliance_types);
      }

      toggleUpperApplianceImages = (event) => {
        if(this.state.appliance_types.get("U") === event.target.id){
            //console.log("GOD are you there?");
            this.upperImage.current.src="";
            this.setState({appliance_types:this.state.appliance_types.set("U","")});
        }
        else{
            this.setState({appliance_types:this.state.appliance_types.set("U",event.target.id)});
            this.upperImage.current.src="/images/appliance/"+ event.target.id + ".png";
            //console.log(this.lowerImage);
        }
        this.props.submitted(this.canvasDrawDataStack,this.saveableCanvas,this.state.appliance_types);
      }

      storeCanvasDrawingData(data){
        
        this.setState({canvasDrawData:data});
        console.log(this.state.canvasDrawData);
      }

      static getDerivedStateFromProps(nextProps){
          
          
          return true;
      }

      storeCanvasElement(canvasElement){
        // this.setState({canvasData: canvasElement}); 
        this.canvasDrawDataStack.push(this.saveableCanvas.getSaveData());
        console.log(this.canvasDrawDataStack);
        this.props.submitted(this.canvasDrawDataStack,this.saveableCanvas,this.state.appliance_types);
        
        return this.canvasDrawDataStack;
        
        // this.storeCanvasDrawingData(JSON.parse(this.saveableCanvas.getSaveData()));
        // // debugger;
        // if(this.state.canvasDrawData != null &&
        //     this.state.canvasElement != this.saveableCanvas.canvas.interface.toDataURL()){
        //     console.log(JSON.stringify(this.state.canvasDrawData));
        //     this.saveableCanvas.loadSaveData(JSON.stringify(this.state.canvasDrawData));
        // }
       
        // this.setState({canvasElement:this.saveableCanvas.canvas.interface.toDataURL()});
        // console.log(this.state.canvasElement);
      }
    
    render(){

        const files = this.state.files.map(file => (
            <li key={file.name}>
              {/*{file.name} - {file.size} bytes*/}
              {file.name}
            </li>
          ));

        return ( 
            <div className="prescription mt-5">               
                <div className="part-header"> 
                    <h3>Prescription</h3>
                </div>

                <div className="prescription-field">
                    {/*Todo: Add 'active' on className after 'location' for CSS when clicked U or L */}
                    <div className="part-value section-prescription">
                        <div className="row">
                            <div className="col-md-5">
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <div className="font-weight-bold float-left">&#183;&nbsp;Retainer</div>
                                            <div className="font-weight-bold float-right">&#43;</div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <div className="retainer-appliances">
                                                    <div className="location">
                                                        <span className="appliances">- Standard Hawley Retainer</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Standard_Hawley_Retainer_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);
                                                            }} 
                                                            id="Standard_Hawley_Retainer_L">
                                                        </label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Standard_Hawley_Retainer_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }}
                                                            id="Standard_Hawley_Retainer_U" >
                                                        </label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Circumferential Hawley Retainer</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Circumferential_Hawley_Retainer_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} 
                                                                id="Circumferential_Hawley_Retainer_L">
                                                        </label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Circumferential_Hawley_Retainer_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }}
                                                            id="Circumferential_Hawley_Retainer_U" ></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Hawley with Flat Bow Rdeacetainer</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Hawley_with_Flat_Bow_Retainer_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Hawley_with_Flat_Bow_Retainer_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Hawley_with_Flat_Bow_Retainer_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Hawley_with_Flat_Bow_Retainer_U" ></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Circumferential with Flat Bow Retainer</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Circumferential_with_Flat_Bow_Retainer_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Circumferential_with_Flat_Bow_Retainer_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Circumferential_with_Flat_Bow_Retainer_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Circumferential_with_Flat_Bow_Retainer_U"></label>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <div className="font-weight-bold float-left">&#183;&nbsp;Pressform Appliance</div>
                                            <div className="font-weight-bold float-right">&#43;</div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <div className="pressform-appliance-appliances">
                                                    <div className="location">
                                                        <span className="appliances">- Essix</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Essix_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Essix_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Essix_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Essix_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Bleaching Tray</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Bleaching_Tray_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Bleaching_Tray_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Bleaching_Tray_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Bleaching_Tray_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Soft Night Guard</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Soft_Night_Guard_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Soft_Night_Guard_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Soft_Night_Guard_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Soft_Night_Guard_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Sports Guard</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Sports_Guard_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Sports_Guard_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Sports_Guard_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Sports_Guard_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- EZ Bonding</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "EZ_Bonding_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="EZ_Bonding_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "EZ_Bonding_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="EZ_Bonding_U"></label>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            <div className="font-weight-bold float-left">&#183;&nbsp;Removable Appliance</div>
                                            <div className="font-weight-bold float-right">&#43;</div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <div className="removalble-appliance-appliances">
                                                    <div className="location">
                                                        <span className="appliances">- Schwartz Appliance</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Schwartz_Appliance_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Schwartz_Appliance_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Schwartz_Appliance_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Schwartz_Appliance_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Sagittal Appliance 2 Way</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Sagittal_Appliance_2_Way_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Sagittal_Appliance_2_Way_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Sagittal_Appliance_2_Way_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Sagittal_Appliance_2_Way_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Fan Type Removable Expander</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Fan_Type_Removable_Expander_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Fan_Type_Removable_Expander_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Fan_Type_Removable_Expander_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Fan_Type_Removable_Expander_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Three Way Expander</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Three_Way_Expander_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Three_Way_Expander_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Three_Way_Expander_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Three_Way_Expander_U"></label>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                            <div className="font-weight-bold float-left">&#183;&nbsp;Fixed Appliance</div>
                                            <div className="font-weight-bold float-right">&#43;</div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <div className="fixed-appliance-appliances">
                                                    <div className="location">
                                                        <span className="appliances">- Lingual Holding Arch</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Lingual_Holding_Arch_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Lingual_Holding_Arch_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Lingual_Holding_Arch_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Lingual_Holding_Arch_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Nance</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Nance_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Nance_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Nance_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Nance_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Thumb Habit with Spurs</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Thumb_Habit_with_Spurs_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Thumb_Habit_with_Spurs_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Thumb_Habit_with_Spurs_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Thumb_Habit_with_Spurs_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Tongue Habit</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Tongue_Habit_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Tongue_Habit_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Tongue_Habit_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Tongue_Habit_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Tongue Habit with Loops</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Tongue_Habit_with_Loops_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Tongue_Habit_with_Loops_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Tongue_Habit_with_Loops_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Tongue_Habit_with_Loops_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Tongue Bead</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Tongue_Bead_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Tongue_Bead_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Tongue_Bead_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Tongue_Bead_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Transpalatal Arch</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Transpalatal_Arch_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Transpalatal_Arch_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Transpalatal_Arch_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Transpalatal_Arch_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Fixed Anterior Bite Plate</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Fixed_Anterior_Bite_Plate_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Fixed_Anterior_Bite_Plate_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Fixed_Anterior_Bite_Plate_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Fixed_Anterior_Bite_Plate_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Rickanator/Bite Ramp</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Rickanator_Bite_Ramp_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Rickanator_Bite_Ramp_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Rickanator_Bite_Ramp_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Rickanator_Bite_Ramp_U"></label>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="4">
                                            <div className="font-weight-bold float-left">&#183;&nbsp;Splint</div>
                                            <div className="font-weight-bold float-right">&#43;</div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                <div className="splint-appliances">
                                                    <div className="location">
                                                        <span className="appliances">- Hard Acrylic Night Guard</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Hard_Acrylic_Night_Guard_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Hard_Acrylic_Night_Guard_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Hard_Acrylic_Night_Guard_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Hard_Acrylic_Night_Guard_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Thermoplastic Night Guard</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Thermoplastic_Night_Guard_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Thermoplastic_Night_Guard_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Thermoplastic_Night_Guard_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Thermoplastic_Night_Guard_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Gelb</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Gelb_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Gelb_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Gelb_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Gelb_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- NTI</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "NTI_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="NTI_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "NTI_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="NTI_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- M-MARPE<sup>®</sup></span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "M-MARPE_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="M-MARPE_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "M-MARPE_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="M-MARPE_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Fixed Sagittal</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Fixed_Sagittal_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Fixed_Sagittal_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Fixed_Sagittal_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Fixed_Sagittal_U"></label>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="5">
                                            <div className="font-weight-bold float-left">&#183;&nbsp;Distalizer Appliance</div>
                                            <div className="font-weight-bold float-right">&#43;</div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                <div className="distalizer-appliance-appliances">
                                                    <div className="location">
                                                        <span className="appliances">- Lip Bumper</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Lip_Bumper_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Lip_Bumper_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Lip_Bumper_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Lip_Bumper_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Distal Jet</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Distal_Jet_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Distal_Jet_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Distal_Jet_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Distal_Jet_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- T-Rex / Pendex</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "T-Rex_Pendex_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="T-Rex_Pendex_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "T-Rex_Pendex_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="T-Rex_Pendex_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Pendulum</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Pendulum_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Pendulum_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Pendulum_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Pendulum_U"></label>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="6">
                                            <div className="font-weight-bold float-left">&#183;&nbsp;Fixed Expander</div>
                                            <div className="font-weight-bold float-right">&#43;</div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="6">
                                            <Card.Body>
                                                <div className="fixed-expander-appliances">
                                                    <div className="location">
                                                        <span className="appliances">- Bi Helix</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Bi_Helix_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Bi_Helix_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Bi_Helix_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Bi_Helix_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Arnold Expander</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Arnold_Expander_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Arnold_Expander_L"></label>
                                                        <label className={"location_u deactivate" + (this.state.appliance_types.get("U") === "Arnold_Expander_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Arnold_Expander_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Porter Expander</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Porter_Expander_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Porter_Expander_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Porter_Expander_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Porter_Expander_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Fan Type Expander</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Fan_Type_Expander_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Fan_Type_Expander_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Fan_Type_Expander_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Fan_Type_Expander_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Rapid Palatal Expander (Hyrax)</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Rapid_Palatal_Expander_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Rapid_Palatal_Expander_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Rapid_Palatal_Expander_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Rapid_Palatal_Expander_U"></label>
                                                    </div>		                            
                                                    <div className="location">
                                                        <span className="appliances">- Compact RPE</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Compact_RPE_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Compact_RPE_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Compact_RPE_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Compact_RPE_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Bonded RPE</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Bonded_RPE_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Bonded_RPE_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Bonded_RPE_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Bonded_RPE_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Haas</span>
                                                        <label className={"location_l deactivate" + (this.state.appliance_types.get("L") === "Haas_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Haas_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Haas_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Haas_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Quad Helix</span>
                                                        <label className={"location_l" + (this.state.appliance_types.get("L") === "Quad_Helix_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Quad_Helix_L"></label>
                                                        <label className={"location_u" + (this.state.appliance_types.get("U") === "Quad_Helix_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Quad_Helix_U"></label>
                                                    </div>		                                
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="7">
                                            <div className="font-weight-bold float-left">&#183;&nbsp;Functional Appliance</div>
                                            <div className="font-weight-bold float-right">&#43;</div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                <div className="functional-appliance-appliances">
                                                    <div className="location">
                                                        <span className="appliances">- Bionator without Screw(open)</span>
                                                        {/*Set Appliance */}
                                                        <label className={"location_l set_appliance" + (this.state.appliance_types.get("L") === "Bionator_without_Screw_open_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Bionator_without_Screw_open_L"></label>
                                                        <label className={"location_u set_appliance" + (this.state.appliance_types.get("U") === "Bionator_without_Screw_open_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Bionator_without_Screw_open_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Bionator without Screw(close)</span>
                                                        <label className={"location_l set_appliance" + (this.state.appliance_types.get("L") === "Bionator_without_Screw_close_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Bionator_without_Screw_close_L"></label>
                                                        <label className={"location_u set_appliance" + (this.state.appliance_types.get("U") === "Bionator_without_Screw_close_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Bionator_without_Screw_close_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Twin Block Without Screw</span>
                                                        <label className={"location_l set_appliance" + (this.state.appliance_types.get("L") === "Twin_Block_Without_Screw_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Twin_Block_Without_Screw_L"></label>
                                                        <label className={"location_u set_appliance" + (this.state.appliance_types.get("U") === "Twin_Block_Without_Screw_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Twin_Block_Without_Screw_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- Herbst Telescopic with TPA and LLHA</span>
                                                        <label className={"location_l set_appliance" + (this.state.appliance_types.get("L") === "Herbst_Telescopic_with_TPA_and_LLHA_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="Herbst_Telescopic_with_TPA_and_LLHA_L"></label>
                                                        <label className={"location_u set_appliance" + (this.state.appliance_types.get("U") === "Herbst_Telescopic_with_TPA_and_LLHA_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="Herbst_Telescopic_with_TPA_and_LLHA_U"></label>
                                                    </div>
                                                    <div className="location">
                                                        <span className="appliances">- MARA with TPA and LLHA</span>
                                                        <label className={"location_l set_appliance" + (this.state.appliance_types.get("L") === "MARA_with_TPA_and_LLHA_L" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleLowerApplianceImages(event);  
                                                            }} id="MARA_with_TPA_and_LLHA_L"></label>
                                                        <label className={"location_u set_appliance" + (this.state.appliance_types.get("U") === "MARA_with_TPA_and_LLHA_U" ? " active" : "") }  
                                                            onClick={(event) => {
                                                                this.toggleUpperApplianceImages(event);
                                                            }} id="MARA_with_TPA_and_LLHA_U"></label>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card> 
                                </Accordion>
                            </div>
                            <div className="inp-drawing col-md-7">
                                <div className="canvas">
                                     {/* Canvas here */}
                                    <div className="drawing-tool">
                                        <p class="overview-titles">DRAWING</p>
                                        <button type="button" id="color-picker" title="color">
                                            <input type="color" id="line-color" width="30" onChange={(event) => {this.setState({color:event.target.value})}}/>
                                        </button>
                                        <button type="button" id="undo-btn" title="undo" onClick={() => {this.saveableCanvas.undo();}}>
                                            <img src="../images/newcase/icon/undo.png" width="30" alt="undo"/>
                                        </button>
                                        <button type="button" id="reset-btn" title="clear" onClick={() => {this.saveableCanvas.clear();}}>
                                            <img src="../images/newcase/icon/reset.png" width="30" alt="reset"/>
                                        </button>
                                    </div>
                                        
                                    <div className="teethImg">
                                        <div class="appliance-image">
                                            <img id="appliance-img-u" ref={this.upperImage} alt=""/>
                                            <img id="appliance-img-l" ref={this.lowerImage} alt=""/>
                                        </div>

                                        <CanvasDraw
                                        className="drawing-canvas"
                                        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                                        brushColor={this.state.color}
                                        brushRadius={this.state.brushRadius}
                                        lazyRadius={this.state.lazyRadius}
                                        canvasWidth={this.state.width}
                                        canvasHeight={this.state.height}
                                        hideGrid={true}
                                        imgSrc="/src/assets/newcase/teeth.png"
                                        onChange={(event) => {
                                                console.log(event);
                                                //this.saveableCanvas.getSaveData()
                                            
                                                this.storeCanvasElement(event);
                                            }
                                        }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="part-value section-bands mt-3">
                        <div className="row">
                                <div className="section-bands title col-md-3">
                                    <b>Add Bands<span className="text-danger">&nbsp;(Required)</span></b>
                                </div>
                                <div className="inp-bands col-md-9">
                                    <select id="inp-bands" name="inp-bands">                       
                                        <option value="select-NA">--Select Option--</option>
                                        <option value="request-bands">Please include bands (Additional charge applied per band)</option>
                                        <option value="send-bands">Will send bands separately (Case will be pending until bands are received)</option>
                                        <option value="not-required-bands">Not Applicable</option>
                                    </select>
                                </div>
                            </div>
                    </div>
                    
                    <div className="part-value section-instruction mt-3">
                        <div className="row">
                            <div className="col-md-3">
                                <span><b>Instructions</b></span>
                            </div>
                            <div className="inp-instructions col-md-9">
                                <label className="instructions instructions_u bc_u" id="Ball_Clasp_U"></label><label className="instructions instructions_l bc_l" id="Ball_Clasp_L"></label><label className="instruction_title">Ball Clasp</label>
                                <input type="text" name="inp-bc" id="inp-bc" value="false" hidden />
                                
                                <label className="instructions instructions_u cc_u" id="C_Clasp_U"></label><label className="instructions instructions_l cc_l" id="C_Clasp_L"></label><label className="instruction_title">"C" Clasp</label>
                                <input type="text" name="inp-cc" id="inp-cc" value="false" hidden />
                                
                                <label className="instructions instructions_u ac_u" id="Adams_Clasp_U"></label><label className="instructions instructions_l ac_l" id="Adams_Clasp_L"></label><label className="instruction_title">Adams Clasp</label>
                                <input type="text" name="inp-ac" id="inp-ac" value="false" hidden />
                                
                                <label className="instructions instructions_u pontic_u" id="Pontic_U"></label><label className="instructions instructions_l pontic_l" id="Pontic_L"></label><label className="instruction_title">Add Pontics</label>
                                <input type="text" id="pontic-txt" maxLength="35" /><input type="text" name="inp-pontic" id="inp-pontic" value="" hidden />
                                
                                <input type="checkbox" id="bc-u" hidden /><input type="checkbox" id="bc-l" hidden />
                                <input type="checkbox" id="cc-u" hidden /><input type="checkbox" id="cc-l" hidden />
                                <input type="checkbox" id="ac-u" hidden /><input type="checkbox" id="ac-l" hidden />
                                <input type="checkbox" id="pontic-u" hidden /><input type="checkbox" id="pontic-l" hidden />
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-design mt-3">
                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="8">
                                    <div className="font-weight-bold float-left">Add Designs</div>
                                    <div className="font-weight-bold float-right">&#43;</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="8">
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                    
                    <div className="part-value section-note mt-3">
                        <div className="row">
                            <div className="section-note title col-md-3">
                                <span><b>Special Requests</b></span>
                            </div>
                            <div className="col-md-9">
                                <textarea name="inp-note" id="inp-note" placeholder="&nbsp;Type Your Special Requests Here."></textarea>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-fileupload">
                        <Dropzone onDrop={this.onDrop} multiple={true} maxFiles={10} accept={'.jpg, .jpeg, .png, .pdf, .stl'}>
                            {({getRootProps, getInputProps}) => (
                            <section className="container dropzone">
                                <div {...getRootProps({className: 'field dropzone'})}>
                                    <input {...getInputProps()} />
                                    <p>&#43;&nbsp;Drop <b>STL Upload</b> here to upload</p>
                                </div>
                                <aside>
                                    {/*<h4>Files</h4>*/}
                                    <ul>{files}</ul>
                                </aside>
                            </section>
                            )}
                        </Dropzone>
                        
                    </div>
                
                </div>             
                
            
            </div>
                    
        );
    }
}

export default NewCasePrescription;