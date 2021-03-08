import '../css/SignUp.css';
import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
          
          <div className="register-form pt-3">
            <div className="register-banner text-left mb-4 mt-4">
                  <h3>Create an Account</h3>
            </div>
            <div className="panel panel-default">
              <div className="panel-body">
                
                <form>
                  
                  <div>
                    <div className="part-header">
                      <h5>Account Security</h5>
                    </div>
                    <div className="input-group">
                      <div className="col-md-12">
                        <input type="email" className="form-control" placeholder="Email Address" />
                      </div>
                      <div className="col-md-12">
                        <input type="password" className="form-control" placeholder="Password" />
                      </div>  
                    </div>
                  </div>
                  
                  <div>
                    <div className="part-header">
                      <h5>Practice Information</h5>
                    </div>
                    <div className="input-group">
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Practice Name" />
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Office Name" />
                      </div>  
                    </div>
                  </div>
                    
                  <div>
                    <div className="part-header">
                      <h5>Personal Information</h5>
                    </div>
                    <div className="input-group">
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="First Name" />
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Last Name" />
                      </div>  
                    </div>
                  </div>  

                  <div>
                    <div className="part-header">
                      <h5>Billing Address</h5>
                    </div>
                    <div className="input-group">
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Street address" />
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Street address 2" />
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="City" />
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="State" />
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Zip" />
                      </div>  
                    </div>
                  </div>    
                  
                  <div className="privacy-policy">
                    By clicking the button below, I agree to the 
                    <a rel="noopener noreferrer" target="_blank" href="http://labslip.uniortholab.com/privacy-statement/"> Privacy Policy</a> 
                      and <a rel="noopener noreferrer" target="_blank" href="http://labslip.uniortholab.com/terms-of-service/"> Terms of Service</a>
                     .</div>

                  <div className="register-button">
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Create Account</button>
                  </div>

                  <div className="mt-3">
                    <p className="text-right">
                        Already registered? <Link to= '/Login' className="links">Login</Link>
                    </p>
                  </div>
            </form></div></div></div>
        );
    }
}