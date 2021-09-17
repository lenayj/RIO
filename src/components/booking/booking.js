import '../../css/booking.css';
import 'react-calendar/dist/Calendar.css';

import {React, Component} from "react";
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import axios from 'axios';
import { myInformation } from '../../actions/userActions';
import {viewAllAddresses} from "../../actions/AddressActions"

import { connect } from "react-redux";
import { putPickups} from '../../actions/pickupActions';
import PropTypes from 'prop-types';


class Booking extends Component{

    constructor(props) {
        super(props);
        this.state = {
          date: '',
          activeTime: false,
          activeArea:false,
          city: '',
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
          officeAddresses:[],
          overviewAddress:""
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
        var selectedOfficeValue = e.target.value.split(',');
        var OfficeAddress = selectedOfficeValue[0] +", "+ selectedOfficeValue[1] +", "+ selectedOfficeValue[2] +", "+ selectedOfficeValue[3] +", " + selectedOfficeValue[4];
        var OfficeName = selectedOfficeValue[5];
        var OfficeHours = selectedOfficeValue[7] + " - " + selectedOfficeValue[6] + " | " + selectedOfficeValue[9] + " - " + selectedOfficeValue[8];
        
        /***split the value by comma and set office name / address / office hours***/
        this.setState({ overviewAddress: OfficeAddress });
        this.setState({ officeName: OfficeName});
        this.setState({ officeHours: OfficeHours});
    }


    componentDidMount(){
        if(!this.props.isAuthenticated){
            this.props.history.push("/Login");
            window.location.reload();
        }

         this.props.viewAllAddresses().then((a)=>{
            this.setState({officeAddresses:a});
        });
       
        this.props.myInformation().then((a)=>{
            this.setState({docName:a.name});
            this.setState({license:a.license});
            this.setState({email:a.Email});
            this.setState({Phone:a.Phone});
            this.setState({state: a.state});
            this.setState({street:a.street });
            this.setState({apartment:a.apartment });
            this.setState({city:a.city});
            this.setState({zipcode:a.zipcode});
            this.setState({addressId:a.addressesId});
            this.setState({mainContactEmail:a.mainContactEmail});
            this.setState({officeName:a.officeName});
            this.setState({officeHours:a.officeHours});
            this.setState({officeLunchHours:a.officeLunchHours});

        });

        var OverviewAddress = this.state.street +" "+ this.state.apartment + ", "+ this.state.state +", "+ this.state.city +", "+ this.state.zipcode;
        this.setState({overviewAddress: OverviewAddress})
        
    }

    pickItUp = (event) => {
        event.preventDefault();
        console.log(event );
        var defaultAddressId = this.props.user.user.id;
        var yyyyMMdd = "";

        if(this.state.date != ""){
            var temp = this.state.date.split('/');
            var yyyy = temp[2];
            var mm = temp[0];
            var dd = temp[1];
            if(mm.length != 2){
                mm = "0"+mm;
            }
            if(dd.length != 2){
                dd = "0"+dd;
            }
            yyyyMMdd = yyyy+"-"+mm+"-"+dd;
        } 

        var params = {
            "email" : this.state.email,
            "addressInt":defaultAddressId,
            "pickup_date" : yyyyMMdd
        }
       
         this.props.putPickups(params);
        //  window.location.reload();
        //  if(!this.props.isAuthenticated){
        //     history.push("/Login");
        //  }

        // axios.post("http://localhost:8080/pickup",params,yourConfig).then((a) =>{
        //     console.log(a);
        // })
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
                                        <select className="custom-select" style={{width:"400px"}} value={this.state.street} onChange={this.selectAddress}>
                                            {this.state.officeAddresses.map((address) => (
                                                <option value={[address.street, address.apartment, address.state, address.city, address.zipcode, address.officeName, address.office_hours_end, address.office_hours_start, address.lunch_hours_end, address.lunch_hours_start]}
                                                        key={address.id}>
                                                    {address.street}, {address.apartment}, {address.state}, {address.city}, {address.zipcode}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="address-edit"><Link to= '/myinfo' target="_blank" className="links">Edit</Link></div>
                                </div>

                                <div className="doctorOfficeInfo mt-4">
                                    <div className="part-value">
                                        <div className="defaultAddr-mark float-right"><p>&#10003; Your Default</p></div>
                                        <div className="form-row user-name">Doctor Name:&nbsp; <span>{this.props.user.user!=null ? this.props.user.user.name: ""}</span></div>
                                        <div className="form-row doctor-license">Doctor License #:&nbsp; <span>{this.props.user.user!=null ? this.props.user.user.license: ""}</span></div>
                                        <div className="form-row user-address">Address:&nbsp; <span>{this.props.user.user!=null ? this.props.user.user.street + " " + this.props.user.user.apartment + 
                                " " + this.props.user.user.state + " " + this.props.user.user.city + " " + this.props.user.user.zipcode : ""}</span></div>
                                        <div className="form-row office-hours">Office Hours:&nbsp; <span>{this.props.user.user!=null ? this.props.user.user.officeHours + " | " + this.props.user.user.officeLunchHours: ""}</span></div>
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
                                        <div className="form-row office-name"><label>Office Name:</label><span>{this.state.officeName}</span></div>
                                        <div className="form-row user-address"><label>Address:</label><span>{this.state.overviewAddress}</span></div>
                                        <div className="form-row office-hours"><label>Office Hours:</label><span>{this.state.officeHours}</span></div>
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

Booking.propTypes = {
    putPickups: PropTypes.func.isRequired,
    myInformation: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.object.isRequired,
    viewAllAddresses: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user,
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps, {viewAllAddresses,putPickups,myInformation})(Booking);