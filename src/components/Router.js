import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Login from '../components/Login';
import Signup from '../components/Signup';

export default () => (
    <Router>
        <Header/> {/* Router Manage */}
        <Route path='/Login' component={Login}/>
        <Route path='/Signup' component={Signup}/>
    </Router>
)