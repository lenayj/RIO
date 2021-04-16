import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

import Login from './Login';
import Signup from './Signup';
import privacyStatement from './privacyStatement';
import termsAndService from './termsAndService';
import resetPassword from './resetPassword';
import forgotPassword from './forgotPassword';

import myCases from './myCases';
import renderOpenMSG from './renderOpenMSG';

import newCase from './newCase';

export default () => (
    <Router>
        <Header />
        <Route path='/Login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/privacyStatement' component={privacyStatement}/>
        <Route path='/termsAndService' component={termsAndService}/>
        <Route path='/resetPassword' component={resetPassword}/>
        <Route path='/forgotPassword' component={forgotPassword}/>
        <Route path='/myCases' component={myCases}/>
        <Route path='/renderOpenMSG' component={renderOpenMSG}/>
        <Route path='/newCase' component={newCase}/>
    </Router>
)