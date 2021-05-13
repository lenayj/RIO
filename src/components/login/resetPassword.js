import '../../css/resetPassword.css';

import React,{useState} from "react";
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import { useForm } from 'react-hook-form';
import { userService } from '../../_services/index';

function ResetPassword() {

    const {register, handleSubmit, errors, getValues} = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve,null));
    const [message,setMessage] = useState("");
    const validatePassword = async(value) => {
      await sleep(1000);
      if(value === getValues('newPassword')) return true;
      return false;
    }

    const onSubmit = (data) => {
        const query = new URLSearchParams(window.location.href);
        const token = query.get('token')
        const email = window.location.href.split('?')[1].split('email=')[1].split('&')[0];
        userService.resetPassword(data.newPassword,data.confirmPassword,email,token);
        setMessage("Password for username '" + email + "' is successfully reset!");
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
                                        name="newPassword" ref={register({required:true})}/>
                                        {errors.newPassword && errors.newPassword.type === "required" && (<p className="text-danger">Password field is required</p>)}
                                    </div>
                                    <div className="resetPassword-field mb-3">
                                        <span className="resetPassword-label">Confirm Password</span>
                                        <input type="password" className="form-control" 
                                        name="confirmPassword" ref={register({required:true, validate: validatePassword})}/>
                                        {errors.confirmPassword && errors.confirmPassword.type === "required" && (<p className="text-danger">Confirm Password field is required</p>)}
                                        {errors.confirmPassword && errors.confirmPassword.type === "validate" && (<p className="text-danger">Passwords does not match</p>)}
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