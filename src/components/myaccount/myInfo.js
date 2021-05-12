import '../../css/myAccount.css';

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class MyInfo extends Component {

    constructor(props) {
        super(props);    
    
        this.state = {
        
        }

        this.editBtn = this.editBtn.bind(this);
    };

    editBtn() {
        return (
            <Link to={{
                pathname: "/editAddr",
                state: {
                    page: "Edit"
                }
            }} className="edit links">
                <div className="info-value col-md-1">
                    <input type="button" value="Edit" className="btn btn-outline-primary btn-sm" />
                </div> 
            </Link>
            )
    }

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
                                <div className="info-value col-md-6"><span>John Smith</span></div>
                                {this.editBtn()}
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Doctor's License #</span></div>
                                <div className="info-value col-md-6"><span>123456789</span></div>
                                {this.editBtn()}
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Email</span></div>
                                <div className="info-value col-md-7">
                                    <span>johnsmith@uniortholab.com</span>
                                    <div className="text-danger mt-1"><small>This field can't be changed</small></div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Billing Address</span></div>
                                <div className="info-value col-md-6"><span>11917 Front st</span></div>
                                {this.editBtn()}
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Main Contact Name</span></div>
                                <div className="info-value col-md-6"><span>John Smith</span></div>
                                {this.editBtn()}
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Main Contact Email</span></div>
                                <div className="info-value col-md-6"><span>johnsmith@uniortholab.com</span></div>
                                {this.editBtn()}
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Name</span></div>
                                <div className="info-value col-md-6"><span>John Smith Dental</span></div>
                                {this.editBtn()}
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Hours</span></div>
                                <div className="info-value col-md-6"><span>09:00-18:00</span></div>
                                {this.editBtn()}
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Lunch Hours</span></div>
                                <div className="info-value col-md-6"><span>12:00-13:00</span></div>
                                {this.editBtn()}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default MyInfo;