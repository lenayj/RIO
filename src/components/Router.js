import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

import Home from './Home';
import myAccount from './myAccount';

import Login from './Login';
import Signup from './Signup';
import privacyStatement from './privacyStatement';
import termsAndService from './termsAndService';
import resetPassword from './resetPassword';
import forgotPassword from './forgotPassword';

import myCases from './myCases';
import renderOpenMSG from './renderOpenMSG';

import newCase from './newCase';
import newCasePersonalInfo from './newCasePersonalInfo';
import newCasePrescription from './newCasePrescription';

export default () => (
    <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path='/myAccount' component={myAccount}/>
        <Route path='/Login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/privacyStatement' component={privacyStatement}/>
        <Route path='/termsAndService' component={termsAndService}/>
        <Route path='/resetPassword' component={resetPassword}/>
        <Route path='/forgotPassword' component={forgotPassword}/>
        <Route path='/myCases' component={myCases}/>
        <Route path='/renderOpenMSG' component={renderOpenMSG}/>
        <Route path='/newCase' component={newCase}/>
        <Route path='/newCasePersonalInfo' component={newCasePersonalInfo}/>
        <Route path='/newCasePrescription' component={newCasePrescription}/>

    </Router>
)