import React from 'react' 
import { Link } from 'react-router-dom';  

import '../../css/errors.css';

const page404 = () => {
    return (
        <div className="container errors">
            <div className="errors-container">
                <div className="page404">
                    <div className="first text-primary">404</div>
                    <div className="second text-dark">We can't find that page</div>
                    <div className="third text-secondary">Try again or Go to <Link to= '/' className="links">Uniortholab's home page</Link></div>
                </div>
            </div>
        </div>
    );
}

export default page404;