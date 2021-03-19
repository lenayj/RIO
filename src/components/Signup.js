import '../css/SignUp.css';
import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignUp () {

  const {register, handleSubmit, errors, getValues} = useForm();
  const sleep = ms => new Promise(resolve => setTimeout(resolve,null));
  const onSubmit = (data) => {
    //console.log(data);
  }
  const validatePassword = async(value) => {
    await sleep(1000);
    if(value === getValues('password')) return true;

    return false;
  }
  
        return (
          <div className="app full-screen register">
          <div>
          <div className="register-form">
            <div className="register-banner text-left mb-4 mt-4">
                  <h3>Create an Account</h3>
            </div>
            <div className="panel panel-default">
              <div className="panel-body">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="part-header">
                      <h5>Personal Information</h5>
                    </div>
                    <div className="form-input">
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="First Name" 
                        name="firstName" ref={register({required:true})}/>
                        {errors.firstName && errors.firstName.type === "required" && (<p className="text-danger">First Name field is required</p>)}
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Last Name" 
                        name="lastName" ref={register({required:true})}/>
                        {errors.lastName && errors.lastName.type === "required" && (<p className="text-danger">Last Name field is required</p>)}
                      </div>  
                    </div>
                  </div>  
                  
                  <div>
                    <div className="part-header">
                      <h5>Account Security</h5>
                    </div>
                    <div className="form-input">
                      <div className="col-md-12">
                        <input type="email" className="form-control" placeholder="Email Address" 
                        name="email" ref={register({required:true})}/>
                        {errors.email && errors.email.type === "required" && (<p className="text-danger">Email field is required</p>)}
                      </div>
                      <div className="col-md-12">
                        <input type="password" className="form-control" placeholder="Password" 
                        name="password" ref={register({required:true})}/>
                        {errors.password && errors.password.type === "required" && (<p className="text-danger">Password field is required</p>)}
                      </div>
                      <div className="col-md-12">
                        <input type="password" className="form-control" placeholder="Confirm Password" 
                        name="confirmPassword" ref={register({required:true, validate: validatePassword})}/>
                        {errors.confirmPassword && errors.confirmPassword.type === "required" && (<p className="text-danger">Confirm Password field is required</p>)}
                        {errors.confirmPassword && errors.confirmPassword.type === "validate" && (<p className="text-danger">Passwords does not match</p>)}
                      </div>  
                    </div>
                  </div>
                  
                  <div>
                    <div className="part-header">
                      <h5>Practice Information</h5>
                    </div>
                    <div className="form-input">
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Practice Name" 
                        name="practiceName" ref={register({required:true})}/>
                        {errors.practiceName && errors.practiceName.type === "required" && (<p className="text-danger">Practice Name field is required</p>)}
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Office Name" 
                        name="officeName" ref={register({required:true})}/>
                        {errors.officeName && errors.officeName.type === "required" && (<p className="text-danger">Office Name field is required</p>)}
                      </div>  
                    </div>
                  </div>

{/* Billing Address
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
*/}                  
                  <div className="privacy-policy mb-3 mt-3 text-right">
                    <div>By clicking the button below,</div> 
                    <div>I agree to the <a rel="noopener noreferrer" target="_blank" href="http://labslip.uniortholab.com/privacy-statement/">Privacy Policy</a> and
                    <a rel="noopener noreferrer" target="_blank" href="http://labslip.uniortholab.com/terms-of-service/"> Terms of Service</a>.
                    </div>
                  </div>

                  <div className="register-button">
                    <button type="submit" value="submit" className="btn btn-primary btn-lg btn-block">Create Account</button>
                  </div>

                  <div className="mt-3">
                    <p className="text-right">
                        Already registered? <Link to= '/Login' className="links">Login</Link>
                    </p>
                  </div>
            </form></div></div></div></div></div>
        );
    };
  

export default SignUp;