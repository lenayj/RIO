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
            name:props.location.state.name,
            license:props.location.state.license,
            Email:props.location.state.Email,
            Phone:props.location.state.Phone,
            billingAddress:props.location.state.billingAddress,
            mainContactName: props.location.state.mainContactName,
            mainContactEmail:props.location.state.mainContactEmail,
            officeName:props.location.state.officeName,
            officeHours:props.location.state.officeHours,
            officeLunchHours:props.location.state.officeLunchHours
        }
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
                    <div className="editAddr default pt-3">
                        <div className="officeInfo mb-3">                
                            <div className="part-header mb-4">
                                <h3><b>Doctor/Office Information</b></h3>
                            </div>
                            <div className="part-value">
                                <div className="form-row">
                                    <div className="form-group col-md-9">
                                        <div><span>Doctor Name/ Office Name</span></div>
                                        <input type="text" className="form-control" name="doctorOrOfficeName"/>                                                
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>License#</span></div>
                                        <input type="text" className="form-control" name="licenseNum"/>
                                    </div>  
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <div><span>Address Line1</span></div>
                                        <input type="text" className="form-control" name="address"/>                                                
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
                                        <input type="button" className="day btn btn-outline-secondary" value="Mon"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Tue"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Wed"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Thu"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Fri"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Sat"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Sun"/>
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
                                <input type="button" value="Save" className="btn btn-primary btn-lg" />
                            </div>
                        </div>
                    </div>
                </div> 
        );
    }
}

export default EditAddr;