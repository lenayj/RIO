import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';

class EditAddr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.location.state.page,
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
            //console.log(this.state);
        
            let input = {};
            input["doctorName"] = "";
            input["officeName"] = "";
            input["address"] = "";
            input["city"] = "";
            input["state"] = "";
            input["zip"] = "";
            this.setState({input:input});
        
            //alert('Demo Form is submited');
        }
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["doctorName"]) {
            isValid = false;
            errors["doctorName"] = "Please enter your Doctor Name.";
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
                <div className="container myacct editAddr">
                    <div className="directory pt-4">
                        <div className="row pt-3">
                        <Link to= '/myAccount' className="links"><div className="col text-secondary">My Account &gt;&nbsp;</div></Link>
                        <Link to= '/officeAddr' className="links"><div className="col text-secondary">Office Addresses &gt;&nbsp;</div></Link>
                        { (this.state.page === 'New') 
                            ? <div className="col text-dark">New Addresses</div>  
                            : <div className="col text-dark">Edit Addresses</div> 
                        }
                        </div>
                    </div>
                    <div className="myacct-banner text-left">
                        { (this.state.page === 'New') 
                            ? <h1 className="title-wording">New Addresses</h1>
                            : <h1 className="title-wording">Edit Addresses</h1>
                        }
                    </div>
                    <form onSubmit={this.handleSubmit}>
                    <div className="editAddr default pt-3">
                        <div className="officeInfo mb-3">                
                            <div className="part-header mb-4">
                                <h3><b>Doctor/Office Information</b></h3>
                            </div>
                            <div className="part-value">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <div><span>Doctor Name</span></div>
                                        <input type="text" className="form-control" name="doctorName"
                                        value={this.state.input.doctorName} onChange={this.handleChange}/>
                                        <div className="text-danger">{this.state.errors.doctorName}</div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <div><span>Office Name</span></div>
                                        <input type="text" className="form-control" name="officeName"
                                        value={this.state.input.officeName} onChange={this.handleChange}/>  
                                        <div className="text-danger">{this.state.errors.officeName}</div>                                              
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-9">
                                        <div><span>Address</span></div>
                                        <input type="text" className="form-control" name="address"
                                        value={this.state.input.address} onChange={this.handleChange}/>
                                        <div className="text-danger">{this.state.errors.address}</div>                                                 
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>Suite / Building</span></div>
                                        <input type="text" className="form-control" name="suite"/>
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

                        <div className="checkbox mt-4">
                            <div className="defaultAddress">
                                <input type='checkbox' name='defaultAddress' value='defaultAddress'/> Make this as a default address
                            </div>
                        </div>
                        <div className="save mt-4 mb-5">
                            <div className="save-btn">
                                <input type="submit" value="Save" className="btn btn-primary btn-lg" />
                            </div>
                        </div>
                        </form>
                    </div>
                </div> 
        );
    }
}

export default EditAddr;