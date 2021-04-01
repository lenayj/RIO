import '../css/Home.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="homebg">
            <div className="container home">
                <div className="grettingMsg pt-4">
                    {/* Todo :: Implement Login UserName */}
                    <div className="greetingUsers pt-3"><h1>Welcome,</h1>{/*UserName is required*/}</div>
                    <div className="text-secondary pt-2">Upload your Case and Book your pick-up online to avoid delay! <a href="http://uniortholab.com/us">Learn more</a></div>
                </div>
                <div className="menuIcon">
                    <div className="row justify-content-md-center">
                        <div className="col"><Link to= '/' className="links"><img src="/images/main/m_newcase.png" alt="m_newcase"/></Link></div>
                        <div className="col"><Link to= '/' className="links"><img src="/images/main/m_mycases.png" alt="m_mycases"/></Link></div>
                    </div>
                    <div className="row">
                        <div className="col"><Link to= '/' className="links"><img src="/images/main/m_booking.png" alt="m_booking"/></Link></div>
                        <div className="col"><Link to= '/' className="links"><img src="/images/main/m_myinfo.png" alt="m_myinfo"/></Link></div>
                    </div>
                    <div className="row">
                        <div className="col"><Link to= '/' className="links"><img src="/images/main/m_support.png" alt="m_support"/></Link></div>
                        <div className="col"><Link to= '/' className="links"><img src="/images/main/m_viewinvoices.png" alt="m_viewinvoices"/></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;