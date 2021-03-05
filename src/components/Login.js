import '../css/Login.css';

import {Button, Form} from 'reactstrap';
import GoogleLogin from 'react-google-login';
import {React, Component} from "react";
import { Link } from 'react-router-dom';
import MicrosoftLogin from "react-microsoft-login";

import bg from '../assets/bg.png';


class Login extends Component {  
  responseGoogle=(response)=>{
    //console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.name);
    console.log(response.profileObj.email);
  }
  /*microsoftResponse = (response) => {
    console.log(response);
  };*/
  authHandler = (err, data) => {
    console.log(err, data);
  }; 

/* Defined as id password state value */
state = {
    userEmail: '',
    userPW: ''
}

/* input value change ==> onChange */
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

/*handleSubmit = (e) => {
  // Prevent Page reload
  e.preventDefault();
  this.props.onCreate(this.state);
  this.setState({
    userEmail: '',
    userPW: ''
  })
}
*/

appsubmit = () => {
  console.log(this.state.userEmail)
  console.log(this.state.userPW)
}


 render(){
    return (
     <Form>
       <div>
         <div className="login-form">
           <div className="form-container">
              <div className="login-banner">
                <h6 className="text-left">Welcome back</h6>
                <h3 className="text-left">Login to your account</h3>
              </div>
              <div className="login-group">
                <div className="login-field">
                  <span className="login-label">Email</span>
                  <input type="email" className="form-control" name="userEmail" value={this.state.userEmail} onChange={this.handleChange}/>
                </div>
                <div className="login-field">
                  <span className="login-label">Password</span>
                  <input type="password" className="form-control" name="userPW" value={this.state.userPW} onChange={this.handleChange}/>
                </div>  
              </div>
              <div className="login-group overflow-hidden pt-2 pb-2">
                <div className="remember-me">
                  <input type='checkbox' name='remember-me' value='remember'/> Remember me
                </div>
                <div className="forgot-password text-right">
                  <a href="/forgot-password"><span className="pt-3">Forgot Your Password?</span></a>
                </div>
              </div>
              <div className="login-group">
               <Button className="btn-lg btn-primary btn-block" onClick={this.appsubmit} type="submit">Log in</Button>
              </div>
              <div className="login-group pt-1 pb-1">
                <div className="text-center pt-3">Or</div>
              </div>
              <div className="login-group pt-3">
                <div className="social-login">
                  <div className="social-google">
                    <GoogleLogin
                      clientId="448097078035-h3ikudenh75bdpriivj7bg8067dlcutr.apps.googleusercontent.com" 
                      className="mt-1 mb-1"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                      cookiePolicy={'single_host_origin'}
                      theme= "dark"
                      buttonText="Continue with Google"
                    />
                  </div> 
                  <div className="social-ms">
                    <MicrosoftLogin 
                    clientId="ddcae730-c8c6-47af-8171-af06bc0325ab"
                    className="mt-1 mb-1"
                    buttonTheme="light"
                    authCallback={this.authHandler}
                    //Button display name="Continue with Microsoft"
                    />
                  </div>
                </div>
              </div>
              <div className="login-group pt-5">
                <div className="text-center pt-3">Do you have an account? <Link to= '/SignUp' className="links"> Join free today</Link></div>
              </div>
           </div>
         </div>
         <div className="login-bg">
           <div><img src={bg} className="bg" alt="bg" /></div>
         </div>
       </div>
     </Form>
    );
  }
}

export default Login;
