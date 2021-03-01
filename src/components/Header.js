import '../css/Header.css';
import logo from '../assets/logo.png';
import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
    <header className="Header">
        <Link to= '/App' className="links"><img src={logo} className="Logo" alt="logo" /></Link>
        <nav className="Nav">
            <Link to= '/Login' className="links">Login</Link>
            <Link to= '/SignUp' className="links">SignUp</Link>
        </nav>
    </header>    
);

export default Header;