import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import privacyStatement from './privacyStatement';
import resetPassword from './resetPassword';
import forgotPassword from './forgotPassword';
import myCases from './myCases';
import newCase from './newCase';
import renderOpenMSG from './renderOpenMSG';
import myAccount from './myAccount';


export default () => (
    <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path='/Login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/privacyStatement' component={privacyStatement}/>
        <Route path='/resetPassword' component={resetPassword}/>
        <Route path='/forgotPassword' component={forgotPassword}/>
        <Route path='/myCases' component={myCases}/>
        <Route path='/newCase' component={newCase}/>
        <Route path='/renderOpenMSG' component={renderOpenMSG}/>
        <Route path='/myAccount' component={myAccount}/>


    </Router>
)