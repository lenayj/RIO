import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import Dropzone from 'react-dropzone';
import CanvasDraw from "react-canvas-draw";

import '../css/newCase.css';


class NewCasePrescription extends Component {

    constructor() {
        super();
        this.onDrop = (files) => {
          this.setState({files})
          {/*console.log(files)*/}
        };
            
        this.state = {
          files: [],
          color: "#ffc600",
          width: 616.33,
          height: 382,
          brushRadius: 3,
          lazyRadius: 0
        };
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
                                                    <div className="location"><span className="appliances">- Standard Hawley Retainer</span><label className="location_l" id="Standard_Hawley_Retainer_L"></label><label className="location_u" id="Standard_Hawley_Retainer_U"></label><input type="radio" name="appliance-u" id="inp-Standard_Hawley_Retainer_U" value="Standard_Hawley_Retainer_U" hidden /><input type="radio" name="appliance-l" id="inp-Standard_Hawley_Retainer_L" value="Standard_Hawley_Retainer_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Circumferential Hawley Retainer</span><label className="location_l" id="Circumferential_Hawley_Retainer_L"></label><label className="location_u" id="Circumferential_Hawley_Retainer_U"></label><input type="radio" name="appliance-u" id="inp-Circumferential_Hawley_Retainer_U" value="Circumferential_Hawley_Retainer_U" hidden /><input type="radio" name="appliance-l" id="inp-Circumferential_Hawley_Retainer_L" value="Circumferential_Hawley_Retainer_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Hawley with Flat Bow Rdeacetainer</span><label className="location_l" id="Hawley_with_Flat_Bow_Retainer_L"></label><label className="location_u" id="Hawley_with_Flat_Bow_Retainer_U"></label><input type="radio" name="appliance-u" id="inp-Hawley_with_Flat_Bow_Retainer_U" value="Hawley_with_Flat_Bow_Retainer_U" hidden /><input type="radio" name="appliance-l" id="inp-Hawley_with_Flat_Bow_Retainer_L" value="Hawley_with_Flat_Bow_Retainer_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Circumferential with Flat Bow Retainer</span><label className="location_l" id="Circumferential_with_Flat_Bow_Retainer_L"></label><label className="location_u" id="Circumferential_with_Flat_Bow_Retainer_U"></label><input type="radio" name="appliance-u" id="inp-Circumferential_with_Flat_Bow_Retainer_U" value="Circumferential_with_Flat_Bow_Retainer_U" hidden /><input type="radio" name="appliance-l" id="inp-Circumferential_with_Flat_Bow_Retainer_L" value="Circumferential_with_Flat_Bow_Retainer_L" hidden /></div>
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
                                                    <div className="location"><span className="appliances">- Essix</span><label className="location_l" id="Essix_L"></label><label className="location_u" id="Essix_U"></label><input type="radio" name="appliance-u" id="inp-Essix_U" value="Essix_U" hidden /><input type="radio" name="appliance-l" id="inp-Essix_L" value="Essix_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Bleaching Tray</span><label className="location_l" id="Bleaching_Tray_L"></label><label className="location_u" id="Bleaching_Tray_U"></label><input type="radio" name="appliance-u" id="inp-Bleaching_Tray_U" value="Bleaching_Tray_U" hidden /><input type="radio" name="appliance-l" id="inp-Bleaching_Tray_L" value="Bleaching_Tray_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Soft Night Guard</span><label className="location_l" id="Soft_Night_Guard_L"></label><label className="location_u" id="Soft_Night_Guard_U"></label><input type="radio" name="appliance-u" id="inp-Soft_Night_Guard_U" value="Soft_Night_Guard_U" hidden /><input type="radio" name="appliance-l" id="inp-Soft_Night_Guard_L" value="Soft_Night_Guard_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Sports Guard</span><label className="location_l deactivate" id="Sports_Guard_L"></label><label className="location_u" id="Sports_Guard_U"></label><input type="radio" name="appliance-u" id="inp-Sports_Guard_U" value="Sports_Guard_U" hidden /><input type="radio" name="appliance-l" id="inp-Sports_Guard_L" value="Sports_Guard_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- EZ Bonding</span><label className="location_l" id="EZ_Bonding_L"></label><label className="location_u" id="EZ_Bonding_U"></label><input type="radio" name="appliance-u" id="inp-EZ_Bonding_U" value="EZ_Bonding_U" hidden /><input type="radio" name="appliance-l" id="inp-EZ_Bonding_L" value="EZ_Bonding_L" hidden /></div>
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
                                                    <div className="location"><span className="appliances">- Schwartz Appliance</span><label className="location_l" id="Schwartz_Appliance_L"></label><label className="location_u" id="Schwartz_Appliance_U"></label><input type="radio" name="appliance-u" id="inp-Schwartz_Appliance_U" value="Schwartz_Appliance_U" hidden /><input type="radio" name="appliance-l" id="inp-Schwartz_Appliance_L" value="Schwartz_Appliance_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Sagittal Appliance 2 Way</span><label className="location_l deactivate" id="Sagittal_Appliance_2_Way_L"></label><label className="location_u" id="Sagittal_Appliance_2_Way_U"></label><input type="radio" name="appliance-u" id="inp-Sagittal_Appliance_2_Way_U" value="Sagittal_Appliance_2_Way_U" hidden /><input type="radio" name="appliance-l" id="inp-Sagittal_Appliance_2_Way_L" value="Sagittal_Appliance_2_Way_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Fan Type Removable Expander</span><label className="location_l deactivate" id="Fan_Type_Removable_Expander_L"></label><label className="location_u" id="Fan_Type_Removable_Expander_U"></label><input type="radio" name="appliance-u" id="inp-Fan_Type_Removable_Expander_U" value="Fan_Type_Removable_Expander_U" hidden /><input type="radio" name="appliance-l" id="inp-Fan_Type_Removable_Expander_L" value="Fan_Type_Removable_Expander_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Three Way Expander</span><label className="location_l deactivate" id="Three_Way_Expander_L"></label><label className="location_u" id="Three_Way_Expander_U"></label><input type="radio" name="appliance-u" id="inp-Three_Way_Expander_U" value="Three_Way_Expander_U" hidden /><input type="radio" name="appliance-l" id="inp-Three_Way_Expander_L" value="Three_Way_Expander_L" hidden /></div>
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
                                                    <div className="location"><span className="appliances">- Lingual Holding Arch</span><label className="location_l" id="Lingual_Holding_Arch_L"></label><label className="location_u" id="Lingual_Holding_Arch_U"></label><input type="radio" name="appliance-u" id="inp-Lingual_Holding_Arch_U" value="Lingual_Holding_Arch_U" hidden /><input type="radio" name="appliance-l" id="inp-Lingual_Holding_Arch_L" value="Lingual_Holding_Arch_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Nance</span><label className="location_l deactivate" id="Nance_L"></label><label className="location_u" id="Nance_U"></label><input type="radio" name="appliance-u" id="inp-Nance_U" value="Nance_U" hidden /><input type="radio" name="appliance-l" id="inp-Nance_L" value="Nance_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Thumb Habit with Spurs</span><label className="location_l" id="Thumb_Habit_with_Spurs_L"></label><label className="location_u" id="Thumb_Habit_with_Spurs_U"></label><input type="radio" name="appliance-u" id="inp-Thumb_Habit_with_Spurs_U" value="Thumb_Habit_with_Spurs_U" hidden /><input type="radio" name="appliance-l" id="inp-Thumb_Habit_with_Spurs_L" value="Thumb_Habit_with_Spurs_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Tongue Habit</span><label className="location_l deactivate" id="Tongue_Habit_L"></label><label className="location_u" id="Tongue_Habit_U"></label><input type="radio" name="appliance-u" id="inp-Tongue_Habit_U" value="Tongue_Habit_U" hidden /><input type="radio" name="appliance-l" id="inp-Tongue_Habit_L" value="Tongue_Habit_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Tongue Habit with Loops</span><label className="location_l deactivate" id="Tongue_Habit_with_Loops_L"></label><label className="location_u" id="Tongue_Habit_with_Loops_U"></label><input type="radio" name="appliance-u" id="inp-Tongue_Habit_with_Loops_U" value="Tongue_Habit_with_Loops_U" hidden /><input type="radio" name="appliance-l" id="inp-Tongue_Habit_with_Loops_L" value="Tongue_Habit_with_Loops_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Tongue Bead</span><label className="location_l deactivate" id="Tongue_Bead_L"></label><label className="location_u" id="Tongue_Bead_U"></label><input type="radio" name="appliance-u" id="inp-Tongue_Bead_U" value="Tongue_Bead_U" hidden /><input type="radio" name="appliance-l" id="inp-Tongue_Bead_L" value="Tongue_Bead_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Transpalatal Arch</span><label className="location_l deactivate" id="Transpalatal_Arch_L"></label><label className="location_u" id="Transpalatal_Arch_U"></label><input type="radio" name="appliance-u" id="inp-Transpalatal_Arch_U" value="Transpalatal_Arch_U" hidden /><input type="radio" name="appliance-l" id="inp-Transpalatal_Arch_L" value="Transpalatal_Arch_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Fixed Anterior Bite Plate</span><label className="location_l deactivate" id="Fixed_Anterior_Bite_Plate_L"></label><label className="location_u" id="Fixed_Anterior_Bite_Plate_U"></label><input type="radio" name="appliance-u" id="inp-Fixed_Anterior_Bite_Plate_U" value="Fixed_Anterior_Bite_Plate_U" hidden /><input type="radio" name="appliance-l" id="inp-Fixed_Anterior_Bite_Plate_L" value="Fixed_Anterior_Bite_Plate_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Rickanator/Bite Ramp</span><label className="location_l deactivate" id="Rickanator_Bite_Ramp_L"></label><label className="location_u" id="Rickanator_Bite_Ramp_U"></label><input type="radio" name="appliance-u" id="inp-Rickanator_Bite_Ramp_U" value="Rickanator_Bite_Ramp_U" hidden /><input type="radio" name="appliance-l" id="inp-Rickanator_Bite_Ramp_L" value="Rickanator_Bite_Ramp_L" hidden /></div>
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
                                                    <div className="location"><span className="appliances">- Hard Acrylic Night Guard</span><label className="location_l" id="Hard_Acrylic_Night_Guard_L"></label><label className="location_u" id="Hard_Acrylic_Night_Guard_U"></label><input type="radio" name="appliance-u" id="inp-Hard_Acrylic_Night_Guard_U" value="Hard_Acrylic_Night_Guard_U" hidden /><input type="radio" name="appliance-l" id="inp-Hard_Acrylic_Night_Guard_L" value="Hard_Acrylic_Night_Guard_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Thermoplastic Night Guard</span><label className="location_l" id="Thermoplastic_Night_Guard_L"></label><label className="location_u" id="Thermoplastic_Night_Guard_U"></label><input type="radio" name="appliance-u" id="inp-Thermoplastic_Night_Guard_U" value="Thermoplastic_Night_Guard_U" hidden /><input type="radio" name="appliance-l" id="inp-Thermoplastic_Night_Guard_L" value="Thermoplastic_Night_Guard_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Gelb</span><label className="location_l" id="Gelb_L"></label><label className="location_u" id="Gelb_U"></label><input type="radio" name="appliance-u" id="inp-Gelb_U" value="Gelb_U" hidden /><input type="radio" name="appliance-l" id="inp-Gelb_L" value="Gelb_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- NTI</span><label className="location_l deactivate" id="NTI_L"></label><label className="location_u" id="NTI_U"></label><input type="radio" name="appliance-u" id="inp-NTI_U" value="NTI_U" hidden /><input type="radio" name="appliance-l" id="inp-NTI_L" value="NTI_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- M-MARPE<sup>®</sup></span><label className="location_l deactivate" id="M-MARPE_L"></label><label className="location_u" id="M-MARPE_U"></label><input type="radio" name="appliance-u" id="inp-M-MARPE_U" value="M-MARPE_U" hidden /><input type="radio" name="appliance-l" id="inp-M-MARPE_L" value="M-MARPE_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Fixed Sagittal</span><label className="location_l deactivate" id="Fixed_Sagittal_L"></label><label className="location_u" id="Fixed_Sagittal_U"></label><input type="radio" name="appliance-u" id="inp-Fixed_Sagittal_U" value="Fixed_Sagittal_U" hidden /><input type="radio" name="appliance-l" id="inp-Fixed_Sagittal_L" value="Fixed_Sagittal_L" hidden /></div>
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
                                                    <div className="location"><span className="appliances">- Lip Bumper</span><label className="location_l" id="Lip_Bumper_L"></label><label className="location_u" id="Lip_Bumper_U"></label><input type="radio" name="appliance-u" id="inp-Lip_Bumper_U" value="Lip_Bumper_U" hidden /><input type="radio" name="appliance-l" id="inp-Lip_Bumper_L" value="Lip_Bumper_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Distal Jet</span><label className="location_l deactivate" id="Distal_Jet_L"></label><label className="location_u" id="Distal_Jet_U"></label><input type="radio" name="appliance-u" id="inp-Distal_Jet_U" value="Distal_Jet_U" hidden /><input type="radio" name="appliance-l" id="inp-Distal_Jet_L" value="Distal_Jet_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- T-Rex / Pendex</span><label className="location_l deactivate" id="T-Rex_Pendex_L"></label><label className="location_u" id="T-Rex_Pendex_U"></label><input type="radio" name="appliance-u" id="inp-T-Rex_Pendex_U" value="T-Rex_Pendex_U" hidden /><input type="radio" name="appliance-l" id="inp-T-Rex_Pendex_L" value="T-Rex_Pendex_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Pendulum</span><label className="location_l deactivate" id="Pendulum_L"></label><label className="location_u" id="Pendulum_U"></label><input type="radio" name="appliance-u" id="inp-Pendulum_U" value="Pendulum_U" hidden /><input type="radio" name="appliance-l" id="inp-Pendulum_L" value="Pendulum_L" hidden /></div>
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
                                                    <div className="location"><span className="appliances">- Bi Helix</span><label className="location_l" id="Bi_Helix_L"></label><label className="location_u" id="Bi_Helix_U"></label><input type="radio" name="appliance-u" id="inp-Bi_Helix_U" value="Bi_Helix_U" hidden /><input type="radio" name="appliance-l" id="inp-Bi_Helix_L" value="Bi_Helix_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Arnold Expander</span><label className="location_l" id="Arnold_Expander_L"></label><label className="location_u deactivate" id="Arnold_Expander_U"></label><input type="radio" name="appliance-u" id="inp-Arnold_Expander_U" value="Arnold_Expander_U" hidden /><input type="radio" name="appliance-l" id="inp-Arnold_Expander_L" value="Arnold_Expander_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Porter Expander</span><label className="location_l" id="Porter_Expander_L"></label><label className="location_u" id="Porter_Expander_U"></label><input type="radio" name="appliance-u" id="inp-Porter_Expander_U" value="Porter_Expander_U" hidden /><input type="radio" name="appliance-l" id="inp-Porter_Expander_L" value="Porter_Expander_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Fan Type Expander</span><label className="location_l deactivate" id="Fan_Type_Expander_L"></label><label className="location_u" id="Fan_Type_Expander_U"></label><input type="radio" name="appliance-u" id="inp-Fan_Type_Expander_U" value="Fan_Type_Expander_U" hidden /><input type="radio" name="appliance-l" id="inp-Fan_Type_Expander_L" value="Fan_Type_Expander_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Rapid Palatal Expander (Hyrax)</span><label className="location_l deactivate" id="Rapid_Palatal_Expander_L"></label><label className="location_u" id="Rapid_Palatal_Expander_U"></label><input type="radio" name="appliance-u" id="inp-Rapid_Palatal_Expander_U" value="Rapid_Palatal_Expander_U" hidden /><input type="radio" name="appliance-l" id="inp-Rapid_Palatal_Expander_L" value="Rapid_Palatal_Expander_L" hidden /></div>		                            
                                                    <div className="location"><span className="appliances">- Compact RPE</span><label className="location_l" id="Compact_RPE_L"></label><label className="location_u" id="Compact_RPE_U"></label><input type="radio" name="appliance-u" id="inp-Compact_RPE_U" value="Compact_RPE_U" hidden /><input type="radio" name="appliance-l" id="inp-Compact_RPE_L" value="Compact_RPE_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Bonded RPE</span><label className="location_l deactivate" id="Bonded_RPE_L"></label><label className="location_u" id="Bonded_RPE_U"></label><input type="radio" name="appliance-u" id="inp-Bonded_RPE_U" value="Bonded_RPE_U" hidden /><input type="radio" name="appliance-l" id="inp-Bonded_RPE_L" value="Bonded_RPE_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Haas</span><label className="location_l deactivate" id="Haas_L"></label><label className="location_u" id="Haas_U"></label><input type="radio" name="appliance-u" id="inp-Haas_U" value="Haas_U" hidden /><input type="radio" name="appliance-l" id="inp-Haas_L" value="Haas_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Quad Helix</span><label className="location_l" id="Quad_Helix_L"></label><label className="location_u" id="Quad_Helix_U"></label><input type="radio" name="appliance-u" id="inp-Quad_Helix_U" value="Quad_Helix_U" hidden /><input type="radio" name="appliance-l" id="inp-Quad_Helix_L" value="Quad_Helix_L" hidden /></div>		                                
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
                                                    <div className="location"><span className="appliances">- Bionator without Screw(open)</span><label className="location_l set_appliance Bionator_without_Screw_open_L" id="Bionator_without_Screw_open_L"></label><label className="location_u set_appliance Bionator_without_Screw_open_U" id="Bionator_without_Screw_open_U"></label><input type="radio" name="appliance-u" className="set-appliance" id="inp-Bionator_without_Screw_open_U" value="Bionator_without_Screw_open_U" hidde /><input type="radio" name="appliance-l" className="set-appliance" id="inp-Bionator_without_Screw_open_L" value="Bionator_without_Screw_open_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Bionator without Screw(close)</span><label className="location_l set_appliance Bionator_without_Screw_close_L" id="Bionator_without_Screw_close_L"></label><label className="location_u set_appliance Bionator_without_Screw_close_U" id="Bionator_without_Screw_close_U"></label><input type="radio" name="appliance-u" className="set-appliance" id="inp-Bionator_without_Screw_close_U" value="Bionator_without_Screw_close_U" hidden /><input type="radio" name="appliance-l" className="set-appliance" id="inp-Bionator_without_Screw_close_L" value="Bionator_without_Screw_close_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Twin Block Without Screw</span><label className="location_l set_appliance Twin_Block_Without_Screw_L" id="Twin_Block_Without_Screw_L"></label><label className="location_u set_appliance Twin_Block_Without_Screw_U" id="Twin_Block_Without_Screw_U"></label><input type="radio" name="appliance-u" className="set-appliance" id="inp-Twin_Block_Without_Screw_U" value="Twin_Block_Without_Screw_U" hidden /><input type="radio" name="appliance-l" className="set-appliance" id="inp-Twin_Block_Without_Screw_L" value="Twin_Block_Without_Screw_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- Herbst Telescopic with TPA and LLHA</span><label className="location_l set_appliance Herbst_Telescopic_with_TPA_and_LLHA_L" id="Herbst_Telescopic_with_TPA_and_LLHA_L"></label><label className="location_u set_appliance Herbst_Telescopic_with_TPA_and_LLHA_U" id="Herbst_Telescopic_with_TPA_and_LLHA_U"></label><input type="radio" name="appliance-u" className="set-appliance" id="inp-Herbst_Telescopic_with_TPA_and_LLHA_U" value="Herbst_Telescopic_with_TPA_and_LLHA_U" hidden /><input type="radio" name="appliance-l" className="set-appliance" id="inp-Herbst_Telescopic_with_TPA_and_LLHA_L" value="Herbst_Telescopic_with_TPA_and_LLHA_L" hidden /></div>
                                                    <div className="location"><span className="appliances">- MARA with TPA and LLHA</span><label className="location_l set_appliance MARA_with_TPA_and_LLHA_L" id="MARA_with_TPA_and_LLHA_L"></label><label className="location_u set_appliance MARA_with_TPA_and_LLHA_U" id="MARA_with_TPA_and_LLHA_U"></label><input type="radio" name="appliance-u" className="set-appliance" id="inp-MARA_with_TPA_and_LLHA_U" value="MARA_with_TPA_and_LLHA_U" hidden /><input type="radio" name="appliance-l" className="set-appliance" id="inp-MARA_with_TPA_and_LLHA_L" value="MARA_with_TPA_and_LLHA_L" hidden /></div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card> 
                                </Accordion>
                            </div>
                            <div className="inp-drawing col-md-7">
                                <div className="appliance-image">
                                     {/* Canvas here */}

                                     <div className="drawing-tool">
                                        <p class="overview-titles">DRAWING</p>
                                        <button type="button" id="color-picker" title="color"><input type="color" id="line-color" width="30"/></button>
                                        <button type="button" id="undo-btn" title="undo" onClick={() => {this.saveableCanvas.undo();}}>
                                            <img src="../images/newcase/icon/undo.png" width="30"/>
                                        </button>
                                        <button type="button" id="reset-btn" title="clear" onClick={() => {this.saveableCanvas.clear();}}>
                                            <img src="../images/newcase/icon/reset.png" width="30"/>
                                        </button>
                                    </div>
                                        
                                    <div className="teethImg">
                                        <CanvasDraw
                                        className="drawing-canvas"
                                        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                                        brushColor={this.state.color}
                                        brushRadius={this.state.brushRadius}
                                        lazyRadius={this.state.lazyRadius}
                                        canvasWidth={this.state.width}
                                        canvasHeight={this.state.height}
                                        hideGrid={true}
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