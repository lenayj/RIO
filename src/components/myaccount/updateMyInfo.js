import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';

class UpdateMyInfo extends Component {

    constructor(props){
        super(props);
        console.log("asdsd");
        console.log(props);
        this.state = {
            name: props.location.state.name,
            license : props.location.state.license,
            Email: props.location.state.Email,
            Phone: props.location.state.Phone,
            billingAddress : props.location.state.billingAddress,
            mainContactName : props.location.state.mainContactName,
            mainContactEmail : props.location.state.mainContactEmail,
            officeName : props.location.state.officeName,
            officeHours : props.location.state.officeHours,
            officeLunchHours: props.location.state.officeLunchHours
        }

        this.mon= "0";
        this.tue= "0";
        this.wed= "0";
        this.thu= "0";
        this.fri= "0";
        this.sat= "0";
        this.sun= "0";
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
                    <div className="update-myinfo default pt-3">
                        <div className="officeInfo mb-3">                
                            <div className="part-header mb-4">
                                <h3><b>Doctor/Office Information</b></h3>
                            </div>
                            <div className="part-value">
                                <div className="form-row">
                                    <div className="form-group col-md-9">
                                        <div><span>Doctor Name/ Office Name</span></div>
                                        <input type="text" className="form-control" name="doctorOrOfficeName" value={this.state.officeName}/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>License#</span></div>
                                        <input type="text" className="form-control" name="licenseNum" value={this.state.license}/>
                                    </div>  
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <div><span>Address Line1</span></div>
                                        <input type="text" className="form-control" name="address" value={this.state.billingAddress}/>                                                
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <div><span>City</span></div>
                                        <input type="text" className="form-control" name="city"/>                                                
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>State</span></div>
                                        <input type="text" className="form-control" name="state"/>  
                                    </div> 
                                    <div className="form-group col-md-2">
                                        <div><span>Zip</span></div>
                                        <input type="text" className="form-control" name="zip"/>  
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
                                        <input type="button" className="day btn btn-outline-secondary" value="Mon" onChange={(e) => { this.mon = "0" }}/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Tue" onChange={(e) => { this.tue = "0" }}/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Wed" onChange={(e) => { this.wed = "0" }}/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Thu" onChange={(e) => { this.thu = "0"}}/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Fri" onChange={(e) => { this.fri = "0"}}/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Sat" onChange={(e) => { this.sat = "0"}}/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Sun" onChange={(e) => { this.sun = "0" }}/>
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
                            <input type="button" value="Save" className="btn btn-primary btn-lg float-right mb-4" />
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default UpdateMyInfo;