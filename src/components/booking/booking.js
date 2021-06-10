import '../../css/booking.css';
import 'react-calendar/dist/Calendar.css';

import {React, Component} from "react";
import Calendar from 'react-calendar';


class Booking extends Component{

    constructor() {
        super();
        this.state = {
          date: '',
        };
      }
      
    onChange = (date) =>{
        this.setState({
            date: date.toLocaleDateString()
        })
        //console.log(date.toLocaleDateString())
    }

    onClickDay = (date) => {
        alert(date);
    }

    clearDate = () =>{
        this.setState({
            date: ''
        })
    }

    render(){

        return(
            <div className="dashboard-bg-color">            
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
                                        <div className="form-row">
                                            <div className="user-name float-left"><span>John Smith</span></div>
                                            <div className="defaultAddr-mark float-right"><p>&#10003; Your Default</p></div>
                                        </div>
                                        <div className="form-row doctor-license">Doctor License #:&nbsp; <span>12345</span></div>
                                        <div className="form-row user-address">Address:&nbsp; <span>11917 FRONT ST, NORWALK, CA 90650</span></div>
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
