import React, { Component } from 'react' 
import { Link } from 'react-router-dom';    

import '../../css/errors.css';

class SignupSuccess extends Component {

    render() {
        return (
            <div className="container errors">
                <div className="errors-container">
                    <div className="signup-success">
                        <div className="successIcon"><img src="../images/errors/signupsuccess.png" alt="signupsuccess"/></div>
                        <div className="first">You're all signed up!</div>
                        <div className="second text-secondary">You have successfully signed up for Universal Lab.<br/>
                        You can now start using our portal. Please, proceed to a <Link to= '/Login' className="links">login page</Link>.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupSuccess;