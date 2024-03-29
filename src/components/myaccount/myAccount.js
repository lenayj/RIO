import '../../css/myAccount.css';
import '../../css/Home.css';

import { connect } from "react-redux";
import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MyAccount extends Component {

    componentDidMount(){
        if(!this.props.isAuthenticated){
            this.props.history.push("/Login");
            window.location.reload();
        }
    }

    render(){
        return (
            <div className="dashboard-bg-color">
                <div className="container myacct">
                    <div className="myacct-banner text-left mb-4 mt-4">
                                <h1 className="title-wording">My Account</h1>
                    </div>
                    <div className="menuIcon myacct pt-5">
                        <div className="row">
                            <div className="col"><Link to= '/myInfo' className="links"><img src="/images/myacct/myinfo.png" alt="myinfo"/></Link></div>
                        </div>
                        <div className="row">
                            <div className="col"><Link to= '/officeAddr' className="links"><img src="/images/myacct/officeaddr.png" alt="officeaddr"/></Link></div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
MyAccount.propTypes = {
    isAuthenticated: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(MyAccount);