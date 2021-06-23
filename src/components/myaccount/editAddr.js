import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';
import axios from 'axios';

class EditAddr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressesIds: props.location.state.address.addressesIds,
            name: props.location.state.address.user.firstName + " " + props.location.state.address.user.lastName,
            license : props.location.state.address.user.license,
            Email: props.location.state.address.user.email,
            Phone: props.location.state.address.user.phone,
            billingAddress : props.location.state.address.user.billingAddress,
            mainContactName : props.location.state.address.user.mainContactName,
            mainContactEmail : props.location.state.address.user.mainContactEmail,
            officeName : props.location.state.address.user.officeName,
            officeHours : props.location.state.address.office_hours_start+ "-" + props.location.state.address.office_hours_end,
            officeLunchHours: props.location.state.address.lunch_hours_start + "-" + props.location.state.address.lunch_hours_end,
            is_default: props.location.state.is_default
        }
    }

    modifyAddress = (event) => {
        var params = {
            "email" : "venkatesh@uniortholab.com",
            "is_default" : 1,
            "city" : "LA",
            "street" : "1212 q3wqw",
            "apartment" : "apartment crazy",
            "zipcode" : "12121",
            "office_hours_start" : 1000,
            "office_hours_end" : 1200,
            "lunch_hours_start"  : 1212,
            "lunch_hours_end" : 3232,
            "office_work_days" : "1234567"
        }
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI0NzU5NTEzLCJpYXQiOjE2MjQ0NTk1MTMsImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.aH-G3lOGBciPzylCA98cdJnbLhPoYeshY2lXP4Jx0jAIa2YSZ7U2eKFfcQr4Lv4ghtPG4-Yrp_2OdhoDV495-w"
            }
         }
        axios.post("http://localhost:8080/modifyAddress/2",params,yourConfig).then((a) =>{
            console.log(a);
        })
    }


    convertNumToTime(num){
        var hr = parseInt(num) / 60;
        var min = parseInt(num) % 60;
        return hr + ":"+min;
    }

    onChangeLunchHour = (event) => {
        console.log(event);
        debugger;
        var timeinnumbers = event.map((a) => {
            var arr = a.split(":").map((b) => {
                return parseInt(b)
            });
            console.log(parseInt(arr[0])*60 + parseInt(arr[1]));
            return parseInt(arr[0])*60 + parseInt(arr[1]);
        });
        this.setState({officeLunchHours: timeinnumbers.join("-")});
    }

    onChangeOfficeHour = (event) => {
        console.log(event);
        debugger;
        var timeinnumbers = event.map((a) => {
            var arr = a.split(":").map((b) => {
                return parseInt(b)
            });
            console.log(parseInt(arr[0])*60 + parseInt(arr[1]));
            return parseInt(arr[0])*60 + parseInt(arr[1]);
        });
        
        this.setState({officeHours: timeinnumbers.join("-")});
    }
    
    render(){
        debugger;
        var temp = this.state.officeHours.split("-").map((a) => {
            return this.convertNumToTime(a);
        });
        var temp2 = this.state.officeLunchHours.split("-").map((a) => {
            return this.convertNumToTime(a);
        });
        console.log(temp);
        console.log(temp2);
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
                                        <input type="text" className="form-control" name="doctorOrOfficeName" value = { this.state.officeName } onChange = {(event) => {alert(event.target.value);this.setState({officeName: event.target.value})}}/>                                                
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>License#</span></div>
                                        <input type="text" className="form-control" name="licenseNum" value = { this.state.officeName } onChange = {(event) => {alert(event.target.value);this.setState({officeName: event.target.value})}}/>                                               
                                    </div>  
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <div><span>Address Line1</span></div>
                                        <input type="text" className="form-control" name="address" value = { this.state.officeName } onChange = {(event) => {alert(event.target.value);this.setState({officeName: event.target.value})}}/>                                                                                               
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <div><span>City</span></div>
                                        <input type="text" className="form-control" name="city" value = { this.state.officeName } onChange = {(event) => {alert(event.target.value);this.setState({officeName: event.target.value})}}/>                                                                                               
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>State</span></div>
                                        <input type="text" className="form-control" name="state" value = { this.state.officeName } onChange = {(event) => {alert(event.target.value);this.setState({officeName: event.target.value})}}/>                                                
                                    </div> 
                                    <div className="form-group col-md-2">
                                        <div><span>Zip</span></div>
                                        <input type="text" className="form-control" name="zip" value = { this.state.officeName } onChange = {(event) => {alert(event.target.value);this.setState({officeName: event.target.value})}}/>                                               
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
                                            value={temp}
                                            onChange = {this.onChangeOfficeHour}
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
                                            value={temp2}
                                            onChange = {this.onChangeLunchHour}
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
                                <input type="button" value="Save" className="btn btn-primary btn-lg" onClick={this.modifyAddress}/>
                            </div>
                        </div>
                    </div>
                </div> 
        );
    }
}

export default EditAddr;