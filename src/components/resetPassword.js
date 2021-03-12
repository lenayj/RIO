import '../css/resetPassword.css';

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import { useForm } from 'react-hook-form';

function ResetPassword() {

    const {register, handleSubmit, errors, getValues} = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve,null));
    const onSubmit = (data) => {
      //console.log(data);
    }
    const validatePassword = async(value) => {
      await sleep(1000);
      if(value === getValues('newPW')) return true;
  
      return false;
    }

    return (
        <div className="app full-screen register">
           <div>
                <div className="resetPassword-form pt-3">
                    <div className="resetPassword-banner text-left mb-4 mt-4">
                        <h3>Reset Password</h3>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="resetPassword-group mb-3">
                                    <div className="resetPassword-field mb-3">
                                        <span className="resetaPssword-label">New Password</span>
                                        <input type="password" className="form-control" 
                                        name="newPW" ref={register({required:true})}/>
                                        {errors.newPW && errors.newPW.type === "required" && (<p className="text-danger">Password field is required</p>)}
                                    </div>
                                    <div className="resetPassword-field mb-3">
                                        <span className="resetPassword-label">Confirm Password</span>
                                        <input type="password" className="form-control" 
                                        name="confirmPW" ref={register({required:true, validate: validatePassword})}/>
                                        {errors.confirmPW && errors.confirmPW.type === "required" && (<p className="text-danger">Confirm Password field is required</p>)}
                                        {errors.confirmPW && errors.confirmPW.type === "validate" && (<p className="text-danger">Passwords does not match</p>)}
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
        </div>
          
        );
    };

export default ResetPassword;