import React, { Component } from 'react'
import MultiStep from 'react-multistep'
import '../css/newCase.css';
import NewCasePersonalInfo from './newCasePersonalInfo'
import NewCasePrescription from './newCasePrescription'

class NewCase extends Component {

    render(){
        const steps = [
            { component: <NewCasePersonalInfo /> },
            { component: <NewCasePrescription /> },
          ]
          
        const prevStyle = {'background':'#007bff', 'text-align': 'center', 'color': 'white', 'border': 'none', 'width': '200px'
        ,'border-radius': '12px', 'height': '40px'}
        const nextStyle = {'background':'#007bff', 'text-align': 'center', 'color': 'white', 'border': 'none', 'width': '200px'
        ,'border-radius': '12px', 'height': '40px'}

        return ( 
            <div className="container newCase">
                <div className="newCase-banner text-left mb-4 mt-4">
                            <h1 className="title-wording">New Case</h1>
                </div>
                <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
            </div>
        );
    }
}

export default NewCase;