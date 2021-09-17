import '../../css/Login.css';
import {login} from '../../actions/authActions';
import { userService } from '../../_services';

import {Button, Form} from 'reactstrap';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import {React, Component} from "react";
import { Redirect, Link } from 'react-router-dom';
import { clearErrors } from '../../actions/errorActions';
import MicrosoftLogin from 'react-microsoft-login';
//import FlashMessage from 'react-flash-message';

import bg from '../../assets/bg.png';

class Login extends Component {  

  constructor(props) {
    super(props);

    this.state = {
        usernameOrEmail: '',
        password: '', 
        submitted: false,
        loading: false,
        error: '',
        loginStatus: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
  const { name, value } = e.target;
  this.setState({ [name]: value });
}

handleSubmit(e) {
  e.preventDefault();

  this.setState({ submitted: true });
  const { usernameOrEmail, password } = this.state;

  if (!(usernameOrEmail && password)) {
      return;
  }

  this.setState({ loading: true });
  // userService.login(usernameOrEmail, password)
  //     .then(
  //         user => {
  //             const { from } = this.props.location.state || { from: { pathname: "/" } };
  //             this.props.history.push(from);
  //         },
  //         error => this.setState({ error, loading: false })
  //     );

  // debugger;
  this.props.login({usernameOrEmail,password}).then((res) => {
    this.setState({ loginStatus: true });
  }).catch((err)=>{ this.setState({ loginStatus: false });});
}



  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.name);
    console.log(response.profileObj.email);
    userService.gmaillogin(response.profileObj.email, response.tokenObj.access_token,response.profileObj.name.split(" ")[0],response.profileObj.name.split(" ")[1])
      .then(
          user => {
              const { from } = this.props.location.state || { from: { pathname: "/" } };
              this.props.history.push(from);
          },
          error => this.setState({ error, loading: false })
      );
  }

  responseMicrosoft = (err, data) => {
    userService.outlooklogin(data.account.userName, data.accessToken,data.account.name.split(" ")[0],data.account.name.split(" ")[1])
      .then(
          user => {
              const { from } = this.props.location.state || { from: { pathname: "/" } };
              this.props.history.push(from);
          },
          error => this.setState({ error, loading: false })
      );
  };

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

async loadData(props) {
  try {
    
 } catch (e) {
     console.log(e);
 }
}

 render(){
  //  debugger;
  var flashingMessage = (this.state.loginStatus !=  null)
    ? (!this.state.loginStatus) 
    ? (
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Login Failed</strong><br/>Please check your login information.
      </div>
      )
    : (<div></div>)
    : (<div></div>);

   if(this.props.accessToken){
    //  return (<Redirect to="/myCases" />)
    this.props.history.push("/");
    // this.props.history.push("/myCases");
  }
    return (
     <Form>
       <div>
         <div className="login-form">
           <div className="form-container">
              {flashingMessage}
              <div className="login-banner">
                <h6 className="text-left">Welcome back</h6>
                <h3 className="text-left">Login to your account</h3>
              </div>
              <div className="login-group">
                <div className="login-field">
                  <span className="login-label">Email</span>
                  <input type="email" className="form-control" name="usernameOrEmail" value={this.state.usernameOrEmail} onChange={this.handleChange}/>
                </div>
                <div className="login-field">
                  <span className="login-label">Password</span>
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>  
              </div>
              <div className="login-group overflow-hidden pt-2 pb-2">
                <div className="remember-me">
                  <input type='checkbox' name='remember-me' value='remember'/> Remember me
                </div>
                <div className="forgot-password text-right">
                  <a href="/forgot-password"><span className="pt-3"><Link to= '/forgotPassword' className="links">Forgot Your Password?</Link></span></a>
                </div>
              </div>
              <div className="login-group">
               <Button className="btn-lg btn-primary btn-block" onClick={this.handleSubmit} type="submit">Log in</Button>
              </div>
              <div className="login-group pt-1 pb-1">
                <div className="text-center pt-3">Or</div>
              </div>
              <div className="login-group">
                <div className="social-login">
                  <div className="social-google">
                    <GoogleLogin
                      clientId="448097078035-h3ikudenh75bdpriivj7bg8067dlcutr.apps.googleusercontent.com" 
                      className="mt-1 mb-1"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                      cookiePolicy={'single_host_origin'}
                      theme= "light"
                      buttonText="Sign in with Google"
                    />
                  </div> 
                  <div className="social-ms">
                    <MicrosoftLogin 
                    clientId="ddcae730-c8c6-47af-8171-af06bc0325ab"
                    className="mt-1 mb-1"
                    buttonTheme="light"
                    authCallback={this.responseMicrosoft}
                    //Button display name="Continue with Microsoft"
                    />
                  </div>
                </div>
              </div>
              <div className="login-group pt-5">
                <div className="text-center pt-4">Do you have an account? <Link to= '/signup' className="links"> Join free today</Link></div>
              </div>
           </div>
         </div>
         <div className="login-bg">
           <div className="overflow"><img src={bg} className="bg" alt="bg" /></div>
         </div>
       </div>
     </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  accessToken: state.auth.accessToken,
  error: state.error,
  login: state.login,
  clearErrors: state.clearErrors
});

export default connect(mapStateToProps, { login, clearErrors })(Login);