import '../css/myAccount.css';

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class MyInfo extends Component {

/*Todo: Get User Data for each user informtaion value*/
    render(){
        return (
            <div className="dashboard-bg-color">
                <div className="myacct myinfo">
                    <div className="directory pt-4">
                        <div className="row pt-3">
                        <Link to= '/myAccount' className="links"><div className="col text-secondary">My Account &gt;</div></Link>
                            <div className="col text-dark"> My Information</div> 
                        </div>
                    </div>
                    <div className="myacct-banner text-left">
                                <h1 className="title-wording">My Information</h1>
                    </div>
                    <div className="myinfo pt-3 pb-5">
                        <div className="panel-body">
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Name</span></div>
                                {/*get value required {data.username}*/}
                                <div className="info-value col-md-7"><span>John Smith</span></div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Doctor's License #</span></div>
                                <div className="info-value col-md-7"><span>123456789</span></div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Email</span></div>
                                <div className="info-value col-md-7"><span>johnsmith@uniortholab.com</span></div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Billing Address</span></div>
                                <div className="info-value col-md-7"><span>11917 Front st</span></div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Main Contact Name</span></div>
                                <div className="info-value col-md-7"><span>John Smith</span></div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Main Contact Email</span></div>
                                <div className="info-value col-md-7"><span>johnsmith@uniortholab.com</span></div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Name</span></div>
                                <div className="info-value col-md-7"><span>John Smith Dental</span></div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Hours</span></div>
                                <div className="info-value col-md-7"><span>09:00-18:00</span></div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Lunch Hours</span></div>
                                <div className="info-value col-md-7"><span>12:00-13:00</span></div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default MyInfo;