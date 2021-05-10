import React, { Component , useState } from 'react';

import NewCasePersonalInfo from './newCasePersonalInfo';
import NewCasePrescription from './newCasePrescription';
import NewCaseOfficeInfo from './newCaseOfficeInfo';

import UrxGenerator from './urxGenerator';

import '../css/newCase.css';


class NewCase extends Component {   
    
    render(){
        
        return (
            <div className="dashboard-bg-color">            
            <div className="container newCase">
                <div className="newCase-banner text-left mb-4 mt-4">
                            <h1 className="title-wording">New Case</h1>
                </div> 
            
                <div className="newCase-form">
                    <form>
                        <NewCasePersonalInfo />
                        <NewCasePrescription />
                        <NewCaseOfficeInfo />
                    </form>
                </div>
                <UrxGenerator/>
                <div className="newCase-submitBtn pt-5 pb-5">
                        <input type="button" value="Submit" className="btn btn-primary btn-lg btn-block"/>
                </div>
            </div>
            </div>
        );
    }
}

export default NewCase;