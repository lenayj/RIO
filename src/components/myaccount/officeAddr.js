import '../../css/myAccount.css';

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
/*Todo: Get User Data for default office address value*/

/*Todo: When there is multiple office addresses get multiple office addresses from Numen*/

class OfficeAddr extends Component {

    constructor(props) {
        super(props);    
    
        this.displayData = [];

        this.state = {
            showdata : this.displayData,
            postVal : "",
            rawAddresses: {},
            loaded: false,
        }

        this.appendData = this.appendData.bind(this);
        this.prependData = this.prependData.bind(this);
    };

    componentDidMount(){
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI1MTkwMDY4LCJpYXQiOjE2MjQ4OTAwNjgsImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.1bC_fnPe110WpWwlAtAhLBWhgkbPa-hV-anitOMHpvjhvxa-nAU0Lsd4X8yNiAT112EED1LcAGuTxXmE_sqU2Q"
            }
         }
        axios.get("http://localhost:8080/viewAllAddresses?email=venkatesh@uniortholab.com",yourConfig).then((a) =>{
            // this.prependData(a.data[0]);
            this.setState({rawAddresses:a.data});
            if(this.state.rawAddresses.length != 0){
                this.setState({loaded: true});
            }
            a.data.slice(1).forEach(address => {
                console.log(address);
                this.appendData(address);
            });
        })
    }

    appendData(address) {
        this.displayData.push(
            <div className="defaultAddr col col-md-5">
                <div className="addr-field">
                    <div className="first-row">
                        <div className="user-name float-left"><b>{address.user.firstName + " " + address.user.lastName}</b></div>
                        {/* {address.is_default==0 ? <div className="defaultAddr-mark float-right"><p>&#10003; Your Default</p></div> : "" } */}
                        
                    </div>
                    <div className="second-row user-address">{address.street+", "}</div>
                    <div className="third-row float-right">
                    <Link to={{
                                            pathname: "/editAddr",
                                            state: {
                                                page: "Edit",
                                                address: address
                                            }
                                        }} className="addNew-btn links">
                                            <span>Edit</span>
                                        </Link>  | Delete</div>
                </div>
            </div>

        );
        this.setState({
           showdata : this.displayData,
           postVal : ""
        });
     }

    prependData() {
    this.displayData.unshift(
        <div className="newAddr defaultAddr col col-md-5 mt-3">
            <div className="addr-field">
                <form>
                    <div className="first-row">
                        <div className="user-name float-left"><label>Name: <input type="text" name="name" /></label></div>
                    </div>
                    <div className="second-row user-address"><label>Address: <input type="text" name="name" /></label></div>
                    <div className="third-row float-right">Save</div>
                </form>
            </div>
        </div>
    );
    this.setState({
        showdata : this.displayData,
        postVal : ""
    });
    }

    render(){
        return (
            <div className="dashboard-bg-color">
                <div className="container myacct officeAddr">
                    <div className="directory pt-4">
                        <div className="row pt-3">
                        <Link to= '/myAccount' className="links"><div className="col text-secondary">My Account &gt;</div></Link>
                            <div className="col text-dark"> Office Addresses</div> 
                        </div>
                    </div>
                    <div className="myacct-banner text-left">
                                <h1 className="title-wording">Office Addresses</h1>
                    </div>
                    <div className="officeAddr default pt-3">
                        <div className="form-row">
                            <div className="addNew col col-md-5">
                                {/*<input type="button" value="+ New" className="addNew-btn btn btn-primary btn-lg"
                                onClick={this.prependData}/>*/}
                                <Link to={{
                                        pathname: "/editAddr",
                                        state: {
                                            page: "New",
                                            address: {
                                                addressesIds: [],
                                                user:{
                                                    firstName:"",
                                                    lastName: "",
                                                    license: "",
                                                    email: "venkatesh@uniortholab.com",
                                                    phone: "",
                                                    mainContactName:"",
                                                    mainContactEmail:"",
                                                    officeName:""
                                                },
                                                street: "",
                                                apartment:"",
                                                state:"",
                                                zipcode:"",
                                                city:"",
                                                office_hours_start:"0",
                                                office_hours_end:"0",
                                                lunch_hours_start:"0",
                                                lunch_hours_end:"0",
                                                is_default:"0",
                                                office_work_days: ""
                                            }
                                        }
                                    }} className="addNew-btn links">
                                    <input type="button" value="+ New" className="btn btn-outline-primary btn-lg" />
                                </Link>
                            </div>
                            {this.state.loaded ? 
                            <div className="defaultAddr col col-md-5">
                                <div className="addr-field">
                                    <div className="first-row">
                                        <div className="user-name float-left"><b>{this.state.rawAddresses[0].user.firstName + " " + this.state.rawAddresses[0].user.lastName}</b></div>
                                        <div className="defaultAddr-mark float-right">
                                            <p>&#10003;</p>
                                            <span>Your Default</span>
                                        </div>
                                    </div>
                                    <div className="second-row user-address">{this.state.rawAddresses[0].street + " "  + this.state.rawAddresses[0].apartment + " " + this.state.rawAddresses[0].city + " " + this.state.rawAddresses[0].state }</div>
                                    <div className="third-row float-right">
                                        <Link to={{
                                            pathname: "/editAddr",
                                            state: {
                                                page: "Edit",
                                                address: this.state.rawAddresses[0]
                                            }
                                        }} className="addNew-btn links">
                                            <span>Edit</span>
                                        </Link> 
                                        <span>&nbsp;|&nbsp;</span>
                                        <span>Delete</span>  
                                    </div>
                                </div>
                            </div>
                            :
                        ""
                            }
                        </div>
                        
                    </div>

                    <div className="officeAddr pt-3">
                        <div className="form-row">
                            {this.displayData}
                        </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default OfficeAddr;