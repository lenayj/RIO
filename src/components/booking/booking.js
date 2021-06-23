import '../../css/booking.css';
import 'react-calendar/dist/Calendar.css';

import {React, Component} from "react";
import Calendar from 'react-calendar';


class Booking extends Component{

    constructor() {
        super();
        this.state = {
          date: '',
          activeTime: false,
          activeArea:false,
          /* Todo :: Bring User's city data from user information and set state */
          city: ''
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
                                        <div className="form-row user-name">Doctor Name:&nbsp; <span>John Smith</span></div>
                                        <div className="form-row doctor-license">Doctor License #:&nbsp; <span>12345</span></div>
                                        <div className="form-row user-address">Address:&nbsp; <span>11917 FRONT ST, NORWALK, CA 90650</span></div>
                                        <div className="form-row office-hours">Office Hours:&nbsp; <span>Mon-Fri 9-6 | 12-1</span></div>
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
                            <input type="button" value="Submit" className="btn btn-primary btn-lg btn-block"/>
                    </div>
                </div>
            </div> 
    )}
}

export default Booking;