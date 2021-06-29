import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';

class UpdateMyInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: {},
            errors: {},
            monActive: false,
            tueActive: false,
            wedActive: false,
            thuActive: false,
            friActive: false,
            satActive: false,
            sunActive: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
         
    handleSubmit(event) {
        event.preventDefault();
        
        if(this.validate()){
            console.log(this.state);
        
            let input = {};
            input["licenseNum"] = "";
            input["officeName"] = "";
            input["address"] = "";
            input["city"] = "";
            input["state"] = "";
            input["zip"] = "";
            input["mfName"] = "";
            input["mlName"] = "";
            input["mEmail"] = "";
            input["phone"] = "";
            this.setState({input:input});
        
            //alert('Demo Form is submited');
        }
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["licenseNum"]) {
            isValid = false;
            errors["licenseNum"] = "Please enter your License Number.";
        }

        if (!input["officeName"]) {
            isValid = false;
            errors["officeName"] = "Please enter your Office Name.";
        }

        if (!input["address"]) {
            isValid = false;
            errors["address"] = "Please enter Address.";
        }
    
        if (!input["city"]) {
            isValid = false;
            errors["city"] = "Please enter City.";
        }
            
        if (!input["state"]) {
            isValid = false;
            errors["state"] = "Please enter State.";
        }
        
        if (!input["zip"]) {
            isValid = false;
            errors["zip"] = "Please enter Zip.";
        }

        if (!input["mfName"]) {
            isValid = false;
            errors["mfName"] = "Please enter Main Contact First Name.";
        }

        if (!input["mlName"]) {
            isValid = false;
            errors["mlName"] = "Please enter Main Contact Last Name.";
        }

        if (!input["mEmail"]) {
          isValid = false;
          errors["mEmail"] = "Please enter Main Contact Email Address.";
        }
    
        if (typeof input["mEmail"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["mEmail"])) {
            isValid = false;
            errors["mEmail"] = "Please enter valid email address.";
          }
        }
    
        if (!input["phone"]) {
          isValid = false;
          errors["phone"] = "Please enter your phone number.";
        }
    
        if (typeof input["phone"] !== "undefined") {
            
          var pattern = new RegExp(/^[0-9\b]+$/);
          if (!pattern.test(input["phone"])) {
            isValid = false;
            errors["phone"] = "Please enter only number.";
          }else if(input["phone"].length != 10){
            isValid = false;
            errors["phone"] = "Please enter valid phone number.";
          }
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    
    MonClicked = (e) => { 
        const currentState = this.state.monActive;
        this.setState({ monActive: !currentState }); 
    }
    TueClicked = (e) => { 
        const currentState = this.state.tueActive;
        this.setState({ tueActive: !currentState });
    }
    WedClicked = (e) => { 
        const currentState = this.state.wedActive;
        this.setState({ wedActive: !currentState });
    }
    ThuClicked = (e) => { 
        const currentState = this.state.thuActive;
        this.setState({ thuActive: !currentState });
    }
    FriClicked = (e) => { 
        const currentState = this.state.friActive;
        this.setState({ friActive: !currentState });
    }
    SatClicked = (e) => { 
        const currentState = this.state.satActive;
        this.setState({ satActive: !currentState });
    }
    SunClicked = (e) => { 
        const currentState = this.state.sunActive;
        this.setState({ sunActive: !currentState });
    }
    
    render(){
        return (
            <div className="dashboard-bg-color">
                <div className="container myacct update-myinfo">
                    <div className="directory pt-4">
                        <div className="row pt-3">
                        <Link to= '/myAccount' className="links"><div className="col text-secondary">My Account &gt;&nbsp;</div></Link>
                        <Link to= '/myInfo' className="links"><div className="col text-secondary">My Information &gt;&nbsp;</div></Link>
                        <div className="col text-dark">Update Profile</div>  
                        </div>
                    </div>
                    <div className="myacct-banner text-left">
                        <h1 className="title-wording">Update Profile</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                    <div className="update-myinfo default pt-3">
                        <div className="officeInfo mb-3">                
                            <div className="part-header mb-4">
                                <h3><b>Doctor/Office Information</b></h3>
                            </div>
                            <div className="part-value">
                                <div className="form-row">
                                    <div className="form-group col-md-9">
                                        <div><span>Doctor Name</span></div>
                                        <input type="text" className="form-control" name="doctorName" disabled={true}/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>License#</span></div>
                                        <input type="text" className="form-control" name="licenseNum"
                                        value={this.state.input.licenseNum} onChange={this.handleChange}/>
                                        <div className="text-danger">{this.state.errors.licenseNum}</div>
                                    </div>  
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <div><span>Office Name</span></div>
                                        <input type="text" className="form-control" name="officeName"
                                        value={this.state.input.officeName} onChange={this.handleChange}/>  
                                        <div className="text-danger">{this.state.errors.officeName}</div>                                              
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <div><span>Address Line1</span></div>
                                        <input type="text" className="form-control" name="address"
                                        value={this.state.input.address} onChange={this.handleChange}/>
                                        <div className="text-danger">{this.state.errors.address}</div>                                                 
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <div><span>City</span></div>
                                        <input type="text" className="form-control" name="city"
                                        value={this.state.input.city} onChange={this.handleChange}/> 
                                        <div className="text-danger">{this.state.errors.city}</div>                                                  
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>State</span></div>
                                        <input type="text" className="form-control" name="state"
                                        value={this.state.input.state} onChange={this.handleChange}/>
                                        <div className="text-danger">{this.state.errors.state}</div>    
                                    </div> 
                                    <div className="form-group col-md-2">
                                        <div><span>Zip</span></div>
                                        <input type="text" className="form-control" name="zip"
                                        value={this.state.input.zip} onChange={this.handleChange}/>
                                        <div className="text-danger">{this.state.errors.zip}</div>   
                                    </div> 
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <div><span>Phone</span></div>
                                        <input type="text" className="form-control" name="phone"
                                        value={this.state.input.phone} onChange={this.handleChange}/>
                                        <div className="text-danger">{this.state.errors.phone}</div>                                                 
                                    </div>
                                    <div className="form-group col-md-6">
                                        <div><span>Email</span></div>
                                        <input type="text" className="form-control" name="email" disabled={true}/>  
                                    </div> 
                                </div>
                            </div>
                        </div>
                        
                        <div className="officeInfo mainContactInfo mb-3">
                            <div className="part-header mb-4">
                                <h3><b>Main Contact</b></h3>
                            </div>
                            <div className="part-value">
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <div><span>Main Contact First Name</span></div>
                                        <input type="text" className="form-control" name="mfName"
                                        value={this.state.input.mfName} onChange={this.handleChange}/>
                                        <div className="text-danger">{this.state.errors.mfName}</div>                                                
                                    </div>
                                    <div className="form-group col-md-4">
                                        <div><span>Main Contact Last Name</span></div>
                                        <input type="text" className="form-control" name="mlName"
                                        value={this.state.input.mlName} onChange={this.handleChange}/>
                                        <div className="text-danger">{this.state.errors.mlName}</div>    
                                    </div> 
                                    <div className="form-group col-md-4">
                                        <div><span>Main Contact Email</span></div>
                                        <input type="text" className="form-control" name="mEmail"
                                        value={this.state.input.mEmail} onChange={this.handleChange}/>
                                        <div className="text-danger">{this.state.errors.mEmail}</div>  
                                    </div> 
                                </div>
                            </div>
                        </div>

                        <div className="officeInfo date-and-hours">
                            <div className="part-header mb-4">
                                <h3><b>Office Hours</b></h3>
                            </div>
                            <div className="part-value">
                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <div><b>Day:</b></div>
                                    </div>
                                    <div className="form-group col-md-8">
                                        <div className={"day" + (this.state.monActive ? ' active': '')} id="Mon" onClick={this.MonClicked} data-value="Mon">Mon</div>
                                        <div className={"day" + (this.state.tueActive ? ' active': '')} id="Tue" onClick={this.TueClicked} data-value="Tue">Tue</div>
                                        <div className={"day" + (this.state.wedActive ? ' active': '')} id="Wed" onClick={this.WedClicked} data-value="Wed">Wed</div>
                                        <div className={"day" + (this.state.thuActive ? ' active': '')} id="Thu" onClick={this.ThuClicked} data-value="Thu">Thu</div>
                                        <div className={"day" + (this.state.friActive ? ' active': '')} id="Fri" onClick={this.FriClicked} data-value="Fri">Fri</div>
                                        <div className={"day" + (this.state.satActive ? ' active': '')} id="Sat" onClick={this.SatClicked} data-value="Sat">Sat</div>
                                        <div className={"day" + (this.state.sunActive ? ' active': '')} id="Sun" onClick={this.SunClicked} data-value="Sun">Sun</div>
                                    </div>  
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <div><b>Business Hours:</b></div>
                                    </div>
                                    <div className="form-group col-md-8">
                                        <TimeRangePicker
                                            clockIcon={null}
                                            clearIcon={null}
                                            disableClock={true}
                                            clockClassName="office-hours"
                                        />
                                        
                                    </div>  
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <div><b>Lunch Hours:</b></div>
                                    </div>
                                    <div className="form-group col-md-8">
                                        <TimeRangePicker
                                            clockIcon = {null}
                                            clearIcon={null}
                                            disableClock={true}
                                            clockClassName="office-hours"
                                        />
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="save mt-4">
                        <div className="save-btn">
                            <input type="submit" value="Save" className="btn btn-primary btn-lg float-right mb-4" />
                        </div>
                    </div>
                    </form>
                </div>
            </div> 
        );
    }
}

export default UpdateMyInfo;