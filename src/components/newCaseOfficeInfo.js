import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NewCaseOfficeInfo extends Component {

    render(){
        return (
            <div className="doctorOfficeInfo mt-5">
                <div className="part-header">
                    <h3>Doctor/Office Information</h3>
                    <div className="address-edit"><Link to= '/myCases' target="_blank" className="links">Edit</Link></div>
                </div>
                
                <div className="part-value">
                    <div className="defaultAddr-mark"><p>&#10003; Your Default</p></div>
                    <div className="form-row user-name"><span>Doctor Name:&nbsp;</span> John Smith</div>
                    <div className="form-row office-nema"><span>Office Name:&nbsp;</span> John Dentistry</div>
                    <div className="form-row user-address"><span>Address:&nbsp;</span> 11917 FRONT ST, NORWALK, CA 90650</div>
                    <div className="form-row phone"><span>Phone:&nbsp;</span> 000-000-0000</div>
                </div>
            </div>
        );
    }
}

export default NewCaseOfficeInfo;