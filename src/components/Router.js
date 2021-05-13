import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

import Login from './login/Login';
import Signup from './login/Signup';
import privacyStatement from './login/privacyStatement';
import termsAndService from './login/termsAndService';
import resetPassword from './login/resetPassword';
import forgotPassword from './login/forgotPassword';

import myAccount from './myaccount/myAccount';
import myInfo from './myaccount/myInfo';
import officeAddr from './myaccount/officeAddr';
import editAddr from './myaccount/editAddr';

import myCases from './mycases/myCases';
import renderOpenMSG from './mycases/renderOpenMSG';

import newCase from './newcase/newCase';
import newCasePersonalInfo from './newcase/newCasePersonalInfo';
import newCasePrescription from './newcase/newCasePrescription';
import newCaseOfficeInfo from './newcase/newCaseOfficeInfo';

import invoices from './invoices/invoices';

export default () => (
    <Router>
        <Header />

        {/*Login and Sign up*/}
        <Route path='/Login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/privacyStatement' component={privacyStatement}/>
        <Route path='/termsAndService' component={termsAndService}/>
        <Route path='/resetPassword' component={resetPassword}/>
        <Route path='/forgotPassword' component={forgotPassword}/>

        {/*Allow users to check, edit and add user data or office addresses*/}
        <Route path='/myAccount' component={myAccount}/>
        <Route path='/myInfo' component={myInfo}/>
        <Route path='/officeAddr' component={officeAddr}/>
        <Route path='/editAddr' component={editAddr}/>

        {/*Allow users to check submitted cases list*/}
        <Route path='/myCases' component={myCases}/>
        <Route path='/renderOpenMSG' component={renderOpenMSG}/>

        {/*Allow users to create New Case*/}
        <Route path='/newCase' component={newCase}/>
        <Route path='/newCasePersonalInfo' component={newCasePersonalInfo}/>
        <Route path='/newCasePrescription' component={newCasePrescription}/>
        <Route path='/newCaseOfficeInfo' component={newCaseOfficeInfo}/>

        {/*Allow users to check invoices list*/}
        <Route path='/invoices' component={invoices}/>   

    </Router>
)