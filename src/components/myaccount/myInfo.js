import '../../css/myAccount.css';

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { myInformation } from '../../actions/userActions';

export class MyInfo extends Component {

    constructor(props) {
        super(props);    
    
        this.state = {
            addressesId:"",
            name:"",
            license:"",
            Email:"",
            Phone:"",
            street : "",
            state:"",
            apartment: "",
            city: "",
            zipcode:"",
            mainContactName:"",
            mainContactEmail:"",
            officeName:"",
            officeHours:"",
            officeLunchHours:"",
            addressesIds:[],
            office_work_days:""
        }

        this.editBtn = this.editBtn.bind(this);
    };

    componentDidMount(){
        if(!this.props.isAuthenticated){
            this.props.history.push("/Login");
            window.location.reload();
        }
        this.props.myInformation();
    }

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
                                <div className="info-value col-md-6"><span>{this.props.user.user!=null? this.props.user.user.name: ""}</span></div>
                                {/*{this.editBtn()}*/}
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Doctor's License #</span></div>
                                <div className="info-value col-md-6"><span>{this.props.user.user!=null? this.props.user.user.license: ""}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Email</span></div>
                                <div className="info-value col-md-7">
                                    <span>{this.props.user.user!=null? this.props.user.user.email : ""}</span>
                                    <div className="text-danger mt-1"><small>This field can't be changed</small></div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Phone</span></div>
                                <div className="info-value col-md-6"><span>{this.props.user.user!=null? this.props.user.user.Phone: ""}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Billing Address</span></div>
                                <div className="info-value col-md-6"><span>{this.props.user.user!=null? this.props.user.user.street + " " + this.props.user.user.apartment + 
                                " " + this.props.user.user.city + " " + this.props.user.user.zipcode: ""}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Main Contact Name</span></div>
                                <div className="info-value col-md-6"><span>{this.props.user.user!=null? this.props.user.user.mainContactName: ""}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Main Contact Email</span></div>
                                <div className="info-value col-md-6"><span>{this.props.user.user!=null? this.props.user.user.mainContactEmail: ""}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Name</span></div>
                                <div className="info-value col-md-6"><span>{this.props.user.user!=null? this.props.user.user.officeName: ""}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Hours</span></div>
                                <div className="info-value col-md-6"><span>{this.props.user.user!=null? this.props.user.user.officeHours: ""}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Lunch Hours</span></div>
                                <div className="info-value col-md-6"><span>{this.props.user.user!=null? this.props.user.user.officeLunchHours : ""}</span></div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="update-info">
                        <Link to={{pathname: "/updateMyInfo",state: this.props.user.user!=null? this.props.user.user : this.state }} className="links">
                            <input type="button" className="btn btn-primary btn-lg mb-5" value="Edit Profile"/>
                        </Link>
                    </div>
                </div> 
            </div>
        );
    }
}
MyInfo.propTypes = {
    myInformation: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {myInformation})(MyInfo);