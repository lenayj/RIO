import '../../css/SignUp.css';
import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {userService} from '../../_services/index'


function SignUp () {

  const {register, handleSubmit, errors, getValues} = useForm();
  const sleep = ms => new Promise(resolve => setTimeout(resolve,null));
  const onSubmit = (data) => {
    userService.signup(data)
      .then(
          user => {
              alert("user saved:" + user);
          },
          error => {alert(error)}
      );
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
                      <h5>Login Information</h5>
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

                  <div className="privacy-policy mb-3 mt-3 text-right">
                    <div>By clicking the button below,</div> 
                    <div>I agree to the <Link to='/privacyStatement' target="_blank">Privact Statement</Link> and
                    <Link to='/termsAndService' target="_blank"> Terms of Service</Link>.
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