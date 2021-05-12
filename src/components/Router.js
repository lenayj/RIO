import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

import Home from './Home';
import myAccount from './myaccount/myAccount';
import myInfo from './myaccount/myInfo';
import officeAddr from './myaccount/officeAddr';
import editAddr from './myaccount/editAddr'

import Login from './Login';
import Signup from './Signup';
import privacyStatement from './privacyStatement';
import termsAndService from './termsAndService';
import resetPassword from './resetPassword';
import forgotPassword from './forgotPassword';

import myCases from './myCases';
import renderOpenMSG from './renderOpenMSG';

import newCase from './newcase/newCase';
import newCasePersonalInfo from './newcase/newCasePersonalInfo';
import newCasePrescription from './newcase/newCasePrescription';
import newCaseOfficeInfo from './newcase/newCaseOfficeInfo';

import booking from './booking';


export default () => (
    <Router>
        <Header />

        <Route path="/" exact component={Home} />

    {/*Allow users to check, edit and add user data or office addresses*/}
        <Route path='/myAccount' component={myAccount}/>
        <Route path='/myInfo' component={myInfo}/>
        <Route path='/officeAddr' component={officeAddr}/>
        <Route path='/editAddr' component={editAddr}/>
        
    {/*Login and Sign up*/}
        <Route path='/Login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/privacyStatement' component={privacyStatement}/>
        <Route path='/termsAndService' component={termsAndService}/>
        <Route path='/resetPassword' component={resetPassword}/>
        <Route path='/forgotPassword' component={forgotPassword}/>

    {/*Allow users to check submitted cases list*/}
        <Route path='/myCases' component={myCases}/>
        <Route path='/renderOpenMSG' component={renderOpenMSG}/>

    {/*Allow users to create New Case*/}
        <Route path='/newCase' component={newCase}/>
        <Route path='/newCasePersonalInfo' component={newCasePersonalInfo}/>
        <Route path='/newCasePrescription' component={newCasePrescription}/>
        <Route path='/newCaseOfficeInfo' component={newCaseOfficeInfo}/>

    {/*Allow users to book a pickup*/}
        <Route path='/booking' component={booking}/>
        
    </Router>
)