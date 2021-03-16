import '../css/Header.css';
import logo from '../assets/logo.png';
import {React, Component} from "react";

import { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        if(window.location.pathname === '/Login' || window.location.pathname === '/Signup' ||
        window.location.pathname === '/forgotPassword' || window.location.pathname === '/resetPassword') return null;
        return (
            <header className="Header">
                <Link to= '/App' className="links"><img src={logo} className="Logo" alt="logo" /></Link>
                <nav className="Nav">
                    <Link to= '/myCases' className="links">My Cases</Link>
                    {/*<Link to= '/SignUp' className="links">SignUp</Link>*/}
                </nav>
            </header>    
        );
    }
}

export default Header;
