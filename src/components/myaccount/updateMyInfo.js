import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';
import axios from 'axios';

class UpdateMyInfo extends Component {

    constructor(props){
        super(props);
        console.log("asdsd");
        console.log(props);
        this.state = {
            addressesIds: props.location.state.addressesIds,
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
    sendUpdatedAddress(event){
        debugger;
        console.log(event);
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
        // const [officeHoursValue, onChange1] = useState(['12:00', '11:00']);
        // const [officeLunchHoursValue, onChange2] = useState(['12:00', '11:00']);
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
                    </div>
                    
                    <div className="save mt-4">
                        <div className="save-btn">
                            <input type="button" value="Save" className="btn btn-primary btn-lg float-right mb-4" onClick = { (event) => this.sendUpdatedAddress(event) }/>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default UpdateMyInfo;