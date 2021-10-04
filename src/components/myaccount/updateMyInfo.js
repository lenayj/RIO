import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { modifyAddress} from '../../actions/AddressActions';
import axios from 'axios';
import SearchLocationInput from './SearchLocationInput';

class UpdateMyInfo extends Component {
    constructor(props){
        super(props);
        console.log("asdsd");
        console.log(props);
        this.state = {
            addressesId: props.location.state.id,
            name: props.location.state.name,
            license : props.location.state.license,
            Email: props.location.state.email,
            Phone: props.location.state.phone,
            street : props.location.state.street,
            apartment: props.location.state.apartment,
            city: props.location.state.city,
            state: props.location.state.state,
            zipcode:props.location.state.zipcode,
            mainContactName : props.location.state.mainContactName,
            mainContactEmail : props.location.state.mainContactEmail,
            officeName : props.location.state.officeName,
            officeHours : props.location.state.officeHours,
            officeLunchHours: props.location.state.officeLunchHours,
            monActive: props.location.state.office_work_days.includes("1"),
            tueActive: props.location.state.office_work_days.includes("2"),
            wedActive: props.location.state.office_work_days.includes("3"),
            thuActive: props.location.state.office_work_days.includes("4"),
            friActive: props.location.state.office_work_days.includes("5"),
            satActive: props.location.state.office_work_days.includes("6"),
            sunActive: props.location.state.office_work_days.includes("7"),
            is_default: 1
        }

        this.mon= "0";
        this.tue= "0";
        this.wed= "0";
        this.thu= "0";
        this.fri= "0";
        this.sat= "0";
        this.sun= "0";

        this.handleChange = this.handleChange.bind(this)
    
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
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

    sendUpdatedAddress(event){
        event.preventDefault();
        var params = {
            "email" : this.state.email,
            "is_default" : this.state.is_default,
            "city" : this.state.city,
            "street" : this.state.street,
            "apartment" : this.state.apartment,
            "zipcode" : this.state.zipcode,
            "office_hours_start" : parseInt(this.state.officeHours.split("-")[0]),
            "office_hours_end" : parseInt(this.state.officeHours.split("-")[1]),
            "lunch_hours_start"  : parseInt(this.state.officeLunchHours.split("-")[0]),
            "lunch_hours_end" : parseInt(this.state.officeLunchHours.split("-")[1]),
            "office_work_days" : this.getWorkDays(),
            "state":this.state.state,
            "officeName": this.state.officeName
        }
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI2MTQxNTMwLCJpYXQiOjE2MjU4NDE1MzAsImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.GxmPgGEie-NxqmpezvqlMNKCxkPj9XJPKwCfGgZ5aG8z5ZV71P2U5jKChu8su8AZaLLTr8YKzTWaql4MvIBAWw"
            }
         }

        //this.props.modifyAddress(params,this.state.addressesId, this.props);
        this.props.modifyAddress(params,this.state.addressesId, this.props).then((res,rej) => {
           //alert("res god know what this is" + res);
           //alert("rej god know what this is " + rej);

            if(res!=null){
               
            }
            else{
               
            }
            
        });
        
    }

    componentDidMount(){
        
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI2MTQxNTMwLCJpYXQiOjE2MjU4NDE1MzAsImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.GxmPgGEie-NxqmpezvqlMNKCxkPj9XJPKwCfGgZ5aG8z5ZV71P2U5jKChu8su8AZaLLTr8YKzTWaql4MvIBAWw"
            }
         }
        axios.get("http://localhost:8080/viewAddress/" + this.state.addressesId + "?email=venkatesh@uniortholab.com",yourConfig).then((a) =>{
            console.log(a);
            this.setState({office_work_days:this.getWorkDays()});
            this.setState({monActive:a.data.office_work_days.includes("1")});
            this.setState({tueActive:a.data.office_work_days.includes("2")});
            this.setState({wedActive:a.data.office_work_days.includes("3")});
            this.setState({thuActive:a.data.office_work_days.includes("4")});
            this.setState({friActive:a.data.office_work_days.includes("5")});
            this.setState({satActive:a.data.office_work_days.includes("6")});
            this.setState({sunActive:a.data.office_work_days.includes("7")});
            this.setState({addressesId: a.data.id});
            this.setState({name: a.data.name});
            this.setState({license :a.data.license});
            this.setState({Email: a.data.user.email});
            this.setState({Phone: a.data.Phone});
            this.setState({street : a.data.street});
            this.setState({apartment: a.data.apartment});
            this.setState({city: a.data.city});
            this.setState({state: a.data.state});
            this.setState({zipcode:a.data.zipcode});
            this.setState({mainContactName : a.data.mainContactName});
            this.setState({mainContactEmail :a.data.mainContactEmail});
            this.setState({officeName : a.data.officeName});
            this.setState({officeHours : a.data.office_hours_start+ "-" + a.data.office_hours_end});
            this.setState({ officeLunchHours: a.data.lunch_hours_start + "-" + a.data.lunch_hours_end});
        })
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
                                        <input type="text" className="form-control" name="officeName" value={this.state.officeName} onChange = {this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <div><span>License#</span></div>
                                        <input type="text" className="form-control" name="license" value={this.state.license} onChange = {this.handleChange}/>
                                    </div>  
                                </div>
                                <SearchLocationInput address={this.state} handleChange = {this.handleChange}/>
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


UpdateMyInfo.propTypes = {
    myInformation: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, {modifyAddress})(UpdateMyInfo);