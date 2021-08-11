import React, { Component } from 'react'   
import { Link } from 'react-router-dom';  

import '../../css/errors.css';

class Session extends Component {

    render() {
        return (
            <div className="container errors">
                <div className="errors-container">
                    <div className="session-expired">
                        <div className="session-icon float-left">
                            <div className="errorIcon"><img src="../images/errors/erroricon.png" alt="erroricon"/></div>
                        </div>
                        <div className="session-warning float-right">
                            <div>
                                <div className="h3 font-weight-bold text-danger">Your session has expired</div>
                                <div className="text-secondary">Your session has been expired due to<br/>your inactivity. No worry. Simply click okay again.</div>
                            </div>
                        </div>
                    </div>
                    <div className="session-okay">
                        <Link to= '/Login' className="links"><input type="button" value="Okay" className="btn btn-primary btn-block"/></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Session;