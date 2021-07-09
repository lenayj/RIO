import '../../css/myAccount.css';

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI2MTQxNTMwLCJpYXQiOjE2MjU4NDE1MzAsImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.GxmPgGEie-NxqmpezvqlMNKCxkPj9XJPKwCfGgZ5aG8z5ZV71P2U5jKChu8su8AZaLLTr8YKzTWaql4MvIBAWw"
            }
         }
        axios.get("http://localhost:8080/myInformation?email=venkatesh@uniortholab.com",yourConfig).then((a) =>{
            var addressesId,name, license, Email , Phone,street ,state,apartment,city,zipcode ,mainContactName ,mainContactEmail ,officeName ,officeHours ,officeLunchHours,addressesIds,office_work_days;
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

            console.log(a);

            this.setState({addressesId:addressesId});
            this.setState({name:name});
            this.setState({state:state});
            this.setState({license:license});
            this.setState({Email:Email});
            this.setState({Phone:Phone});
            this.setState({street:street });
            this.setState({apartment:apartment });
            this.setState({city:city});
            this.setState({zipcode:zipcode});
            this.setState({mainContactName:mainContactName});
            this.setState({mainContactEmail:mainContactEmail});
            this.setState({officeName:officeName});
            this.setState({officeHours:officeHours});
            this.setState({officeLunchHours:officeLunchHours});
            this.setState({addressesIds:addressesIds});
            this.setState({office_work_days:office_work_days});
        })
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
                                <div className="info-value col-md-6"><span>{this.state.name}</span></div>
                                {/*{this.editBtn()}*/}
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Doctor's License #</span></div>
                                <div className="info-value col-md-6"><span>{this.state.license}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Email</span></div>
                                <div className="info-value col-md-7">
                                    <span>{this.state.Email}</span>
                                    <div className="text-danger mt-1"><small>This field can't be changed</small></div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Phone</span></div>
                                <div className="info-value col-md-6"><span>{this.state.Phone}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Billing Address</span></div>
                                <div className="info-value col-md-6"><span>{this.state.street + " " + this.state.apartment + 
                                " " + this.state.city + " " + this.state.zipcode}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Main Contact Name</span></div>
                                <div className="info-value col-md-6"><span>{this.state.mainContactName}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Main Contact Email</span></div>
                                <div className="info-value col-md-6"><span>{this.state.mainContactEmail}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Name</span></div>
                                <div className="info-value col-md-6"><span>{this.state.officeName}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Hours</span></div>
                                <div className="info-value col-md-6"><span>{this.state.officeHours}</span></div>
                                
                            </div>
                            <div className="form-row">
                                <div className="info-field col-md-4 ml-5"><span>Office Lunch Hours</span></div>
                                <div className="info-value col-md-6"><span>{this.state.officeLunchHours}</span></div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="update-info">
                        <Link to={{pathname: "/updateMyInfo",state: this.state }} className="links">
                            <input type="button" className="btn btn-primary btn-lg mb-5" value="Edit Profile"/>
                        </Link>
                    </div>
                </div> 
            </div>
        );
    }
}

export default MyInfo;