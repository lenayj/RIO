import '../css/Login.css';

import {Button, Form, FormGroup, Input} from 'reactstrap';
import GoogleLogin from 'react-google-login';
import {React, Component} from "react";
import { Link } from 'react-router-dom';
import MicrosoftLogin from "react-microsoft-login";


class Login extends Component {  
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
  render(){
    return (
      <Form className="login-form">
        <h2 className="text-center">Welcome to Universal RX</h2>
        <h6 className="text-center welcomedes">Universal Orthodontic Lab Digital Prescription</h6>
        <FormGroup>
          <Input className="acctlogin" type="email" placeholder="Username"></Input>
        </FormGroup>
        <FormGroup>
          <Input className="acctlogin" type="password" placeholder="Password"></Input>
        </FormGroup>
        <div className="forgot-password text-left">
          <a href="/forgot-password"><span className="pt-3">Forgot Your Password?</span></a>
        </div>
        <Button className="btn-lg btn-primary btn-block">Log in</Button>
        <div className="text-center pt-3">Or continue with your social account</div>
        <div class="row socialLogin">
          <div class="col-md-6">
            <GoogleLogin
              clientId="448097078035-h3ikudenh75bdpriivj7bg8067dlcutr.apps.googleusercontent.com" 
              className="mt-3 mb-3"
              buttonText="Login with Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
              theme= "dark" />
          </div> 
          <div class="col-md-6">
            <MicrosoftLogin 
            clientId="d0816670-4927-4395-a61e-47e964584112"
            className="mt-3 mb-3"
            buttonText="Login with Microsoft"
            theme= "dark"
            />
          </div>
        </div>
        <div className="text-left pt-3">Do you have an account? 
          
          <Link to= '/SignUp' className="links"> Join free today</Link>
        </div>
      </Form>
      
    );
  }
}

export default Login;
