import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

import Login from './login/Login';
import Signup from './login/Signup';
import privacyStatement from './login/privacyStatement';
import termsAndService from './login/termsAndService';
import resetPassword from './login/resetPassword';
import forgotPassword from './login/forgotPassword';

import myCases from './mycases/myCases';
import renderOpenMSG from './mycases/renderOpenMSG';

import newCase from './newcase/newCase';
import newCasePersonalInfo from './newcase/newCasePersonalInfo';
import newCasePrescription from './newcase/newCasePrescription';
import newCaseOfficeInfo from './newcase/newCaseOfficeInfo';

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
        <Route path='/newCasePersonalInfo' component={newCasePersonalInfo}/>
        <Route path='/newCasePrescription' component={newCasePrescription}/>
        <Route path='/newCaseOfficeInfo' component={newCaseOfficeInfo}/>

    </Router>
)