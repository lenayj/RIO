import '../../css/forgotPassword.css';

import React,{useState} from "react";
import {Button} from 'reactstrap';
import { useForm } from 'react-hook-form';
import { userService  } from "../../_services/index";

/* Let customers submit email address to receive the password reset link 
and sends the 'resetPassword' link to reset the password. */

function ForgotPassword() {

    const {register, handleSubmit, errors} = useForm();
    const [message,setMessage] = useState("");
    const onSubmit = (email) => {
        var retMsg = userService.forgotPassword(email);
        setMessage("Please check your email for furthur instructions");
    }
        return (
            <div className="app full-screen register">
            <div>
                <div className="forgotPassword-form pt-3">
                    <div className="forgotPassword-banner text-left mb-4 mt-4">
                        <h3>Forgot Password?</h3>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="forgotPassword-group mb-3">
                                    <div className="forgotPassword-field mb-3">
                                        <input type="email" className="form-control" placeholder="Enter Email"
                                        name="email" ref={register({required:true})}/>
                                        {errors.PWResetEmail && errors.PWResetEmail.type === "required" && (<p className="text-danger">Email field is required</p>)}
                                        {message}
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
            </div>
          
        );
    };

export default ForgotPassword;