import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import privacyStatement from './privacyStatement';
import termsAndService from './termsAndService';
import resetPassword from './resetPassword';
import forgotPassword from './forgotPassword';
import myCases from './myCases';


export default () => (
    <Router>
        <Route path='/Login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/privacyStatement' component={privacyStatement}/>
        <Route path='/termsAndService' component={termsAndService}/>
        <Route path='/resetPassword' component={resetPassword}/>
        <Route path='/forgotPassword' component={forgotPassword}/>
        <Route path='/myCases' component={myCases}/>
    </Router>
)