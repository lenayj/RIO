import '../../css/myAccount.css';

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

/*Todo: Get User Data for default office address value*/

/*Todo: When there is multiple office addresses get multiple office addresses from Numen*/

class OfficeAddr extends Component {

    constructor(props) {
        super(props);    
    
        this.displayData = [];

        this.state = {
            showdata : this.displayData,
            postVal : ""
        }

        this.appendData = this.appendData.bind(this);
        this.prependData = this.prependData.bind(this);
    };

    appendData() {
        this.displayData.push(
            <div className="defaultAddr col col-md-5">
                <div className="addr-field">
                    <div className="first-row">
                        <div className="user-name float-left"><b>John Smith</b></div>
                        <div className="defaultAddr-mark float-right"><p>&#10003; Your Default</p></div>
                    </div>
                    <div className="second-row user-address">11917 FRONT ST, NORWALK, CA 90650</div>
                    <div className="third-row float-right">Edit | Delete</div>
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
                                            page: "New"
                                        }
                                    }} className="addNew-btn links">
                                    <input type="button" value="+ New" className="btn btn-outline-primary btn-lg" />
                                </Link>
                            </div>
                            <div className="defaultAddr col col-md-5">
                                <div className="addr-field">
                                    <div className="first-row">
                                        <div className="user-name float-left"><b>John Smith</b></div>
                                        <div className="defaultAddr-mark float-right">
                                            <p>&#10003;</p>
                                            <span>Your Default</span>
                                        </div>
                                    </div>
                                    <div className="second-row user-address">11917 FRONT ST, NORWALK, CA 90650</div>
                                    <div className="third-row float-right">
                                        <Link to={{
                                            pathname: "/editAddr",
                                            state: {
                                                page: "Edit"
                                            }
                                        }} className="addNew-btn links">
                                            <span>Edit</span>
                                        </Link> 
                                        <span>&nbsp;|&nbsp;</span>
                                        <span>Delete</span>  
                                    </div>
                                </div>
                            </div>
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