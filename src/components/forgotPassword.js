import '../css/forgotPassword.css';

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';

/* Let customers submit email address to receive the password reset link 
and sends the 'resetPassword' link to reset the password. */

class forgotPassword extends Component {
    
    render() {
        return (
            <div>
                <div className="forgotPassword-form pt-3">
                    <div className="forgotPassword-banner text-left mb-4 mt-4">
                        <h3>Forgot Password?</h3>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <form>
                                <div className="forgotPassword-group mb-3">
                                    <div className="forgotPassword-field mb-3">
                                        <input type="email" className="form-control" placeholder="Enter Email"/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <Button className="btn-lg btn-primary btn-block" type="submit">Send Email</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       
          
        );
    }
}

export default forgotPassword;