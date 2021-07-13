import '../../css/booking.css';
import 'react-calendar/dist/Calendar.css';

import {React, Component} from "react";
import Calendar from 'react-calendar';
import axios from 'axios';
import { myInformation } from '../../actions/userActions';

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
          /* Todo :: Bring User's city data from user information and set state */
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
        //console.log(pickupCity);

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

    componentDidMount(){
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI2NDExNDg5LCJpYXQiOjE2MjYxMTE0ODksImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.x1Vi_pccbGI9GqnRL2NHBNgfHdlGMrnrYnMFP-OoQibhGrLGGhRNhhHwXYvIvcDgjabBRvROOPFc01OqUZ4FHw"
            }
         }
        // axios.get("http://localhost:8080/myInformation?email=venkatesh@uniortholab.com",yourConfig).then((a) =>{
            // var addressesId,name, license, Email , Phone,street ,state,apartment,city,zipcode ,mainContactName ,mainContactEmail ,officeName ,officeHours ,officeLunchHours,addressesIds,office_work_days;
            // addressesId = a.data.id;
            // name = a.data.name;
            // license = a.data.license;
            // Email = a.data.email;
            // Phone = a.data.phone;
            // street  = a.data.street;
            // state = a.data.state;
            // apartment = a.data.apartment;
            // city = a.data.city; 
            // state = a.data.state;
            // zipcode = a.data.zipcode;
            // mainContactName = a.data.mainContactName;
            // mainContactEmail = a.data.mainContactEmail;
            // officeName = a.data.officeName;
            // officeHours = a.data.officeHours;
            // officeLunchHours = a.data.officeLunchHours;
            // addressesIds = a.data.addressesIds;
            // office_work_days = a.data.office_work_days;

            // console.log(a);

            // this.setState({docName:name});
            // this.setState({license:license});
            // this.setState({email:Email});
            // this.setState({Phone:Phone});
            // this.setState({city: city});
            // this.setState({street:street });
            // this.setState({apartment:apartment });
            // this.setState({city:city});
            // this.setState({zipcode:zipcode});
            // this.setState({addressId:addressesId});
            // this.setState({mainContactEmail:mainContactEmail});
            // this.setState({officeName:officeName});
            // this.setState({officeHours:officeHours});
            // this.setState({officeLunchHours:officeLunchHours});
        // })
         debugger;
        this.props.myInformation();
        this.setState({docName:this.props.user.name});
        this.setState({license:this.props.user.license});
        this.setState({email:this.props.user.Email});
        this.setState({Phone:this.props.user.Phone});
        this.setState({city: this.props.user.city});
        this.setState({street:this.props.user.street });
        this.setState({apartment:this.props.user.apartment });
        this.setState({city:this.props.user.city});
        this.setState({zipcode:this.props.user.zipcode});
        this.setState({addressId:this.props.user.addressesId});
        this.setState({mainContactEmail:this.props.user.mainContactEmail});
        this.setState({officeName:this.props.user.officeName});
        this.setState({officeHours:this.props.user.officeHours});
        this.setState({officeLunchHours:this.props.user.officeLunchHours});

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
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI2NDExNDg5LCJpYXQiOjE2MjYxMTE0ODksImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.x1Vi_pccbGI9GqnRL2NHBNgfHdlGMrnrYnMFP-OoQibhGrLGGhRNhhHwXYvIvcDgjabBRvROOPFc01OqUZ4FHw"
            }
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

                                <div className="doctorOfficeInfo mt-4">
                                    <div className="part-value">
                                        <div className="defaultAddr-mark float-right"><p>&#10003; Your Default</p></div>
                                        <div className="form-row user-name">Doctor Name:&nbsp; <span>{this.props.user.user!=null ? this.props.user.user.name: ""}</span></div>
                                        <div className="form-row doctor-license">Doctor License #:&nbsp; <span>{this.props.user.user!=null ? this.props.user.user.license: ""}</span></div>
                                        <div className="form-row user-address">Address:&nbsp; <span>{this.props.user.user!=null ? this.props.user.user.street + " " + this.props.user.user.apartment + 
                                " " + this.props.user.user.city + " " + this.props.user.user.zipcode : ""}</span></div>
                                        <div className="form-row office-hours">Office Hours:&nbsp; <span>Mon-Fri 9-12|1-3</span></div>
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
                                        <div className="form-row office-name"><label>Office Name:</label><span>USOP Dental</span></div>
                                        <div className="form-row user-address"><label>Address:</label><span>11917 FRONT ST, NORWALK, CA 90650</span></div>
                                        <div className="form-row office-hours"><label>Office Hours:</label><span>Mon-Fri 9-6 | 12-1</span></div>
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
    isAuthenticated: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, {putPickups,myInformation})(Booking);