import React, { Component } from 'react'

class NewCaseOfficeInfo extends Component {

    render(){
        return (
            <div className="doctorOfficeInfo mt-5">
                <div className="part-header">
                    <h3>Doctor/Office Information</h3>
                </div>
                <div className="part-value">
                    <div className="form-row">
                        <div className="user-name float-left"><span>John Smith</span></div>
                        <div className="defaultAddr-mark float-right"><p>&#10003; Your Default</p></div>
                    </div>
                    <div className="form-row doctor-license">Doctor License #:&nbsp; <span>12345</span></div>
                    <div className="form-row user-address">Address:&nbsp; <span>11917 FRONT ST, NORWALK, CA 90650</span></div>
                </div>
            </div>
        );
    }
}

export default NewCaseOfficeInfo;