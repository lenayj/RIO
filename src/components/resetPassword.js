import '../css/resetPassword.css';

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';

class resetPassword extends Component {
    
state = {
    newPW: '',
    confirmPW: ''
}

/* input value change ==> onChange */ 
handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
}

    render() {
        return (
            <div>
                <div className="resetPassword-form pt-3">
                    <div className="resetPassword-banner text-left mb-4 mt-4">
                        <h3>Reset Password</h3>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <form>
                                <div className="resetPassword-group mb-3">
                                    <div className="resetPassword-field mb-3">
                                        <span className="resetaPssword-label">New Password</span>
                                        <input type="password" className="form-control" name="newPW" value={this.state.newPW} onChange={this.handleChange}/>
                                    </div>
                                    <div className="resetPassword-field mb-3">
                                        <span className="resetPassword-label">Confirm Password</span>
                                        <input type="password" className="form-control" name="confirmPW" value={this.state.confirmPW} onChange={this.handleChange}/>
                                    </div>  
                                </div>
                                <div className="mb-3">
                                    <Button className="btn-lg btn-primary btn-block" type="submit">Submit</Button>
                                </div>
                                <div>
                                    <div className="text-right"><Link to= '/Login' className="links">Login to Universal RX</Link></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       
          
        );
    }
}

export default resetPassword;