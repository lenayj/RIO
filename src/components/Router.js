import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

import Home from './Home';

import Login from './Login';
import Signup from './Signup';
import privacyStatement from './privacyStatement';
import termsAndService from './termsAndService';
import resetPassword from './resetPassword';
import forgotPassword from './forgotPassword';


export default () => (
    <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path='/Login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/privacyStatement' component={privacyStatement}/>
        <Route path='/termsAndService' component={termsAndService}/>
        <Route path='/resetPassword' component={resetPassword}/>
        <Route path='/forgotPassword' component={forgotPassword}/>

    </Router>
)