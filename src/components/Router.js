import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';

export default () => (
    <Router>
        <Route path='/Login' component={Login}/>
        <Route path='/Signup' component={Signup}/>
    </Router>
)