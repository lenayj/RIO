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
            addressesId: props.location.state.address.id,
            name: props.location.state.address.user.firstName + " " + props.location.state.address.user.lastName,
            license : props.location.state.address.user.license,
            Email: props.location.state.address.user.email,
            Phone: props.location.state.address.user.phone,
            street: props.location.state.address.street,
            apartment:props.location.state.address.apartment,
            city: props.location.state.address.city,
            state: props.location.state.address.state,
            zipcode: props.location.state.address.zipcode,
            mainContactName : props.location.state.address.user.mainContactName,
            mainContactEmail : props.location.state.address.user.mainContactEmail,
            officeName : props.location.state.address.officeName,
            officeHours : props.location.state.address.office_hours_start+ "-" + props.location.state.address.office_hours_end,
            officeLunchHours: props.location.state.address.lunch_hours_start + "-" + props.location.state.address.lunch_hours_end,
            is_default: props.location.state.address.is_default === "1" ? true : false,
            page: props.location.state.page,
            monActive: props.location.state.address.office_work_days.includes("1"),
            tueActive: props.location.state.address.office_work_days.includes("2"),
            wedActive: props.location.state.address.office_work_days.includes("3"),
            thuActive: props.location.state.address.office_work_days.includes("4"),
            friActive: props.location.state.address.office_work_days.includes("5"),
            satActive: props.location.state.address.office_work_days.includes("6"),
            sunActive: props.location.state.address.office_work_days.includes("7")
        }
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

    getWorkDays(){
        var str = "";
        if(this.state.monActive){
            str+="1";
        }
        if(this.state.tueActive){
            str+="2";
        }
        if(this.state.wedActive){
            str+="3";
        }
        if(this.state.thuActive){
            str+="4";
        }
        if(this.state.friActive){
            str+="5";
        }
        if(this.state.satActive){
            str+="6";
        }
        if(this.state.sunActive){
            str+="7";
        }
        return str;
    }

    modifyAddress = (event) => {

        var params = {
            "email" : this.state.Email,
            "is_default" : this.state.is_default ? 1 : 0,
            "city" : this.state.city,
            "street" : this.state.street,
            "apartment" : this.state.apartment,
            "zipcode" : this.state.zipcode,
            "state": this.state.state,
            "office_hours_start" : parseInt(this.state.officeHours.split("-")[0]),
            "office_hours_end" : parseInt(this.state.officeHours.split("-")[1]),
            "lunch_hours_start"  : parseInt(this.state.officeLunchHours.split("-")[0]),
            "lunch_hours_end" : parseInt(this.state.officeLunchHours.split("-")[1]),
            "office_work_days" : this.getWorkDays(),
            "officeName": this.state.officeName
        }
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI1MTkwMDY4LCJpYXQiOjE2MjQ4OTAwNjgsImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.1bC_fnPe110WpWwlAtAhLBWhgkbPa-hV-anitOMHpvjhvxa-nAU0Lsd4X8yNiAT112EED1LcAGuTxXmE_sqU2Q"
            }
         }
         
        if(this.state.page === "New"){
            axios.post("http://localhost:8080/addNewAddress",params,yourConfig).then((a) =>{
                console.log(a);
            })
        }
        else{
            console.log(this.state)
            axios.post("http://localhost:8080/modifyAddress/"+this.state.addressesId,params,yourConfig).then((a) =>{
                console.log(a);
            })
        }
        
    }

    convertNumToTime(num){
        var hr = parseInt(num) / 60;
        var min = parseInt(num) % 60;
        return hr + ":"+min;
    }

    onChangeLunchHour = (event) => {
        console.log(event);
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
                                        <input type="text" className="form-control" name="doctorOrOfficeName" value = { this.state.officeName } onChange = {(event) => {this.setState({officeName: event.target.value})}}/>                                                
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>License#</span></div>
                                        <input type="text" className="form-control" name="licenseNum" value = { this.state.license } onChange = {(event) => {this.setState({license: event.target.value})}}/>                                               
                                    </div>  
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <div><span>Address Line1</span></div>
                                        <input type="text" className="form-control" name="address" value = { this.state.street } onChange = {(event) => {this.setState({street: event.target.value})}}/>                                                                                               
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <div><span>City</span></div>
                                        <input type="text" className="form-control" name="city" value = { this.state.city } onChange = {(event) => {this.setState({city: event.target.value})}}/>                                                                                               
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>State</span></div>
                                        <input type="text" className="form-control" name="state" value = { this.state.state } onChange = {(event) => {this.setState({state: event.target.value})}}/>                                                
                                    </div> 
                                    <div className="form-group col-md-2">
                                        <div><span>Zip</span></div>
                                        <input type="text" className="form-control" name="zip" value = { this.state.zipcode } onChange = {(event) => {this.setState({zipcode: event.target.value})}}/>                                               
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
                                <input type='checkbox' name='defaultAddress' value='defaultAddress' checked = {this.state.is_default} onChange = {(event) => { this.setState({is_default: event.target.checked})}}/> Make this as a default address
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