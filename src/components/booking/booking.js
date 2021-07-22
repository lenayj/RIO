import '../../css/booking.css';
import 'react-calendar/dist/Calendar.css';

import {React, Component} from "react";
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import axios from 'axios';

class Booking extends Component{

    constructor() {
        super();
        this.state = {
          date: '',
          activeTime: false,
          activeArea:false,
          street: "",
          apartment:"",
          city: "",
          zipcode: "",
          email:"",
          docName:"",
          docLicense: "",
          docAddress: "",
          docOfficeHours:"",
          addresses:[],
          addressId:"",
          officeAddresses:[]
        };
      }
      
    onChange = (date) =>{
        this.setState({
            date: date.toLocaleDateString()
        })
        //console.log(date.toLocaleDateString())
    }

    onClickDay = (date) => {
        var today = new Date();
        var istoday = today.getMonth()+1 + '-' + today.getDate();
        var currentTime = today.getHours();
        var selectedDate = date.getMonth()+1 + '-' + date.getDate();
        var pickupCity = this.state.city;
        var notAllowedCity = ['ADELANTO','APPLE VALLEY','BAKERSFIELD','BANNING','BONITA','BEAUMONT','BERMUDA DUNES',
        'CAMARILLO','CARDIFF','CARLSBAD','CATHEDRAL CITY','CHULA VISTA','COACHELLA','CORONADO',
        'DESSERT HOT SPRING','EL CAJON','ENCINITAS', 'ESCONDIDO','GRAND TERRACE','HEMET','HESPERIA',
        'IMPERIAL BEACH','INDIAN WELLS','INDIO','LA COSTA','LA JOLLA','LA MESA','LA QUINTA','LAKE ELSINORE',
        'LAKE SAN MARCOS','LAKESIDE','LANCASTER','LEMON GROVE','LOMA LINDA','MENIFEE','MURRIETA', 'NATIONAL CITY',
        'NEWBURY PARK','OCEANSIDE','OXNARD','PALMDALE','PALM DESSERT','PALM SPRING','PERRIS','PORT HUENEME','POWAY',
        'RANCHO MIRAGE','REDLANDS','ROSAMOND','SACRAMENTO','SAN DIEGO','SAN JACINTO','SAN MARCOS','SAN YSIDRO','SANTEE',
        'SOLANA BEACH','SPRING VALLEY','SUN CITY','TEMECULA','VENTURA','VICTORVILLE','VISTA','WILDOMAR','YUCAIPA']
        //console.log(selectedDate);
        //console.log(today.getMonth()+1 + '-' + today.getDate());
        console.log(pickupCity);

        /* 
        ##### Conditions 1 : Sameday pick up in not allowed after 8am PST for the following area(city) 
        'ADELANTO','APPLE VALLEY','BAKERSFIELD','BANNING','BONITA','BEAUMONT','BERMUDA DUNES',
        'CAMARILLO','CARDIFF','CARLSBAD','CATHEDRAL CITY','CHULA VISTA','COACHELLA','CORONADO',
        'DESSERT HOT SPRING','EL CAJON','ENCINITAS', 'ESCONDIDO','GRAND TERRACE','HEMET','HESPERIA',
        'IMPERIAL BEACH','INDIAN WELLS','INDIO','LA COSTA','LA JOLLA','LA MESA','LA QUINTA','LAKE ELSINORE',
        'LAKE SAN MARCOS','LAKESIDE','LANCASTER','LEMON GROVE','LOMA LINDA','MENIFEE','MURRIETA', 'NATIONAL CITY',
        'NEWBURY PARK','OCEANSIDE','OXNARD','PALMDALE','PALM DESSERT','PALM SPRING','PERRIS','PORT HUENEME','POWAY',
        'RANCHO MIRAGE','REDLANDS','ROSAMOND','SACRAMENTO','SAN DIEGO','SAN JACINTO','SAN MARCOS','SAN YSIDRO','SANTEE',
        'SOLANA BEACH','SPRING VALLEY','SUN CITY','TEMECULA','VENTURA','VICTORVILLE','VISTA','WILDOMAR','YUCAIPA'
        
        ##### Conditions 2 : Sameday pick up in not allowed after 10am PST
        */
        
        if(notAllowedCity.includes(pickupCity) && selectedDate === istoday && currentTime > 6){    

            this.notAllowedArea();
        
        }else if(selectedDate === istoday && currentTime > 9){
            
            this.notAllowedTime();
        
        }

    }

    setDate(){
        this.setState({date:''});
    }

    clearDate = () => {
        this.setDate();
    }

    notAllowedTime = () => {
        const currentStateOfTime = this.state.activeTime;
        this.setState({ activeTime: !currentStateOfTime });
        this.setState({ date:'' });
    }

    notAllowedArea = () => {
        const currentStateOfArea = this.state.activeArea;
        this.setState({ activeArea: !currentStateOfArea });
        this.setState({ date:'' });
    }

    selectAddress = (e) => {
        debugger;
        
        var selectedOfficeValue = e.target.value.split(',');
        var OfficeAddress = selectedOfficeValue[0] +", "+ selectedOfficeValue[1] +", "+ selectedOfficeValue[2] +", "+ selectedOfficeValue[3];
        var OfficeName = selectedOfficeValue[4];
        var OfficeHours = selectedOfficeValue[6] + " - " + selectedOfficeValue[5] + " | " + selectedOfficeValue[8] + " - " + selectedOfficeValue[7];
        
        //alert(OfficeAddress + "Name: " + OfficeName + " Hours: "+ selectedOfficeValue[8]);
        
        /***split the value by comma and set office name / address / office hours***/
        //console.log(this.state.officeAddresses);
        this.setState({ defaultOfficeAddress: OfficeAddress });
        this.setState({ defaultOfficeName: OfficeName});
        this.setState({ defaultOfficeHours: OfficeHours});
        

    }

    

    componentDidMount(){
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI3MTA1Mjg1LCJpYXQiOjE2MjY4MDUyODUsImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.EClEoaTZ-G8pxlQ-O5niddluUbcuj2T6-fwmLy54Tqehcsw4ZgIqyXn7QXocl0Rvu_iw7igVJ5Oap8FQD0MIyA"
            }
         }

         axios.get("http://192.168.1.194:8443/viewAllAddresses?email=venkatesh@uniortholab.com",yourConfig).then((a) =>{
            //var addressesId,name, license, Email , Phone,street ,state,apartment,city,zipcode ,mainContactName ,mainContactEmail ,officeName ,officeHours ,officeLunchHours,addressesIds,office_work_days,is_default;
            
            var officeAddresses, defaultOfficeAddress, defaultOfficeHours, defaultOfficeName;

            officeAddresses = a.data;
            defaultOfficeAddress = a.data[0].street + ", " +  a.data[0].state + ", " + a.data[0].city + ", " + a.data[0].zipcode;
            defaultOfficeHours = a.data[0].office_hours_start + " - " + a.data[0].office_hours_end + " | " + a.data[0].lunch_hours_start + " - " + a.data[0].lunch_hours_end
            defaultOfficeName = a.data[0].officeName;

            debugger;
            console.log(a.data);
            
            this.setState({officeAddresses:officeAddresses});
            this.setState({defaultOfficeAddress:defaultOfficeAddress});
            this.setState({defaultOfficeHours:defaultOfficeHours});
            this.setState({defaultOfficeName:defaultOfficeName});
            
            
         
        /**axios.get("http://192.168.1.194:8080/viewAllAddresses?email=venkatesh@uniortholab.com",yourConfig).then((a) =>{
            var addressesId,name, license, Email , Phone,street ,state,apartment,city,zipcode ,mainContactName ,mainContactEmail ,officeName ,officeHours ,officeLunchHours,addressesIds,office_work_days,is_default;
            addressesId = a.data.id;
            name = a.data.name;
            license = a.data.license;
            Email = a.data.email;
            Phone = a.data.phone;
            street  = a.data.street;
            state = a.data.state;
            apartment = a.data.apartment;
            city = a.data.city; 
            state = a.data.state;
            zipcode = a.data.zipcode;
            mainContactName = a.data.mainContactName;
            mainContactEmail = a.data.mainContactEmail;
            officeName = a.data.officeName;
            officeHours = a.data.officeHours;
            officeLunchHours = a.data.officeLunchHours;
            addressesIds = a.data.addressesIds;
            office_work_days = a.data.office_work_days;
            is_default = a.data.is_default;

            debugger;
            console.log(a);

            console.log(is_default);

            this.setState({docName:name});
            this.setState({license:license});
            this.setState({email:Email});
            this.setState({Phone:Phone});
            this.setState({city: city});
            this.setState({street:street });
            this.setState({apartment:apartment });
            this.setState({city:city});
            this.setState({zipcode:zipcode});
            this.setState({addressId:addressesId});
            this.setState({mainContactEmail:mainContactEmail});
            this.setState({officeName:officeName});
            this.setState({officeHours:officeHours});
            this.setState({officeLunchHours:officeLunchHours});
            this.setState({is_default:is_default});**/
        })
    }

    pickItUp = (event) => {
        console.log(event );
        var defaultAddressId = this.state.addressId;
        var yyyyMMdd = "";

        if(this.state.date !== ""){
            var temp = this.state.date.split('/');
            var yyyy = temp[2];
            var mm = temp[0];
            var dd = temp[1];
            if(mm.length !== 2){
                mm = "0"+mm;
            }
            if(dd.length !== 2){
                dd = "0"+dd;
            }
            yyyyMMdd = yyyy+"-"+mm+"-"+dd;
        } 

        var params = {
            "email" : this.state.email,
            "addressInt":defaultAddressId,
            "pickup_date" : yyyyMMdd
        }
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI1MTkwMDY4LCJpYXQiOjE2MjQ4OTAwNjgsImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.1bC_fnPe110WpWwlAtAhLBWhgkbPa-hV-anitOMHpvjhvxa-nAU0Lsd4X8yNiAT112EED1LcAGuTxXmE_sqU2Q"
            }
         }
        axios.post("http://localhost:8080/pickup",params,yourConfig).then((a) =>{
            console.log(a);
        })
    }
    

    render(){

        return(
            <div className="dashboard-bg-color">
                <div className="alert-message first" style={this.state.activeTime ? {display: "block"} : {display: "none"}}>
                    <div className="alert-popup">
                        <p style={{fontsize:"20px",lineheight:"100px"}}>Sorry! We cannot schedule a same day pick up after 10am PST.</p>
                        <div className="alert-option"><span onClick={this.notAllowedTime}>ok</span></div>
                    </div>
                </div>
                <div className="alert-message second" style={this.state.activeArea ? {display: "block"} : {display: "none"}}>
                    <div className="alert-popup">
                        <p style={{fontsize:"20px",lineheight:"100px"}}>Sorry! Same day pick up is not available in your area after 8:00am PST. Please choose the following business day.</p>
                        <div className="alert-option"><span onClick={this.notAllowedArea}>ok</span></div>
                    </div>
                </div>          
                <div className="container booking">
                    <div className="disclaimer pt-4">
                        <div className="inner text-danger"><p className="exclamation">&#33;</p>Due to Covid19, you may experience some delays with your orders. Thank you for your patience.</div> 
                    </div>
                    <div className="booking-banner text-left mb-4 mt-4">
                                <h1 className="title-wording">Book your pick-up</h1>
                    </div> 
                
                    <div className="booking-form">
                        <form>
                            <div className="first">
                                <div className="booking-inner pt-3">
                                    <div className="booking-inner-title"><h2>Pick-up Date</h2></div>
                                    <div className="text-secondary mb-3">What date do you prefer for picking up?</div>
                                </div>                          
                            
                                <div className="date-pick mt-4">
                                    <div className="pickup-date"><span>Pick Up Date</span><input type="text" value={this.state.date} disabled/></div>
                                    <div className="reset" onClick={this.clearDate}>RESET</div>
                                </div>
                                <div className="calendar">
                                    <Calendar 
                                    onChange={this.onChange} 
                                    onClickDay={this.onClickDay}
                                    //onClick={this.onClickDay} 
                                    value={this.date} 
                                    calendarType="US"
                                    prev2Label={null}
                                    next2Label={null}
                                    className="urx"/>
                                </div>
                            </div>

                            <div className="second">
                                <div className="booking-inner pt-5">
                                    <div className="booking-inner-title"><h2>Personal Information</h2></div>
                                    <div className="text-secondary mb-3">Please provide Information for booking</div>
                                </div>

                                <div className="office-addresses">
                                    <div className="addresses-list">
                                        <select className="custom-select" style={{width:"400px"}} value={this.state.defaultOfficeAddress} onChange={this.selectAddress}>
                                            {this.state.officeAddresses.map((address) => (
                                                <option value={[address.street, address.state, address.city, address.zipcode, address.officeName, address.office_hours_end, address.office_hours_start, address.lunch_hours_end, address.lunch_hours_start]}
                                                        key={address.id}>
                                                    {address.street}, {address.state}, {address.city}, {address.zipcode}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="address-edit"><Link to= '/myinfo' target="_blank" className="links">Edit</Link></div>
                                </div>

                                <div className="doctorOfficeInfo mt-4">
                                    <div className="part-value">
                                        <div className="defaultAddr-mark float-right"><p>&#10003; Your Default</p></div>
                                        <div className="form-row office-name mt-4">Office Name:&nbsp; <span>{this.state.defaultOfficeName}</span></div>
                                        <div className="form-row user-address">Address:&nbsp; <span>{this.state.defaultOfficeAddress}</span></div>
                                        <div className="form-row office-hours">Office Hours:&nbsp; <span>{this.state.defaultOfficeHours}</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="third">
                                <div className="booking-inner pt-5">
                                    <div className="booking-inner-title"><h2>Booking Overview</h2></div>
                                    <div className="text-secondary mb-3">Please Check your appointment details below and confirm</div>
                                </div>
                                <div className="booking-overview mt-4">
                                    <div className="part-value">
                                        <div className="form-row date"><label>Date:</label><span>{this.state.date}</span></div>
                                        <div className="form-row office-name"><label>Office Name:</label><span>{this.state.defaultOfficeName}</span></div>
                                        <div className="form-row user-address"><label>Address:</label><span>{this.state.defaultOfficeAddress}</span></div>
                                        <div className="form-row office-hours"><label>Office Hours:</label><span>{this.state.defaultOfficeHours}</span></div>
                                    </div>
                                    <div className="disclaimer">
                                        <span className="text-danger">Pick up time is not guaranteed and can vary depending on availability.</span>    
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="booking-submitBtn pt-5 pb-5">
                            <input type="button" value="Submit" className="btn btn-primary btn-lg btn-block" onClick={this.pickItUp}/>
                    </div>
                </div>
            </div> 
    )}
}

export default Booking;