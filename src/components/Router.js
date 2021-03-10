import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import resetPassword from './resetPassword'
import forgotPassword from './forgotPassword'

export default () => (
    <Router>
        <Route path='/Login' component={Login}/>
        <Route path='/Signup' component={Signup}/>
        <Route path='/resetPassword' component={resetPassword}/>
        <Route path='/forgotPassword' component={forgotPassword}/>
    </Router>
)