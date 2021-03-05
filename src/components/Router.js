import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import resetPassword from './resetPassword'

export default () => (
    <Router>
        <Route path='/Login' component={Login}/>
        <Route path='/Signup' component={Signup}/>
        <Route path='/resetPassword' component={resetPassword}/>
    </Router>
)