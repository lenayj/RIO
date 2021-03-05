import '../css/resetPassword.css';

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Button, Form} from 'reactstrap';

class resetPassword extends Component {
    
state = {
    newPW: '',
    confirmPW: ''
}

    render() {
        return (
          
            <Form>
                <div>
                    <div>
                        <div className="resetPssword-banner">
                            <h6 className="text-left">Reset Password</h6>
                        </div>
                        <div className="resetPssword-group">
                            <div className="resetPssword-field">
                                <span className="resetPssword-label">New Password</span>
                                <input type="password" className="form-control" name="newPW" value={this.state.newPW}/>
                            </div>
                            <div className="resetPssword-field">
                                <span className="resetPssword-label">Confirm Password</span>
                                <input type="password" className="form-control" name="confirmPW" value={this.state.confirmPW}/>
                            </div>  
                        </div>
                        <div>
                            <Button className="btn-lg btn-primary btn-block" type="submit">Submit</Button>
                        </div>
                        <div>
                            <div className="text-center pt-3"><Link to= '/Login' className="links">login</Link></div>
                        </div>
                    </div>
                </div>
            </Form>
          
        );
    }
}

export default resetPassword;