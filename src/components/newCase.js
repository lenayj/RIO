import React, { Component , useState } from 'react';

import NewCasePersonalInfo from './newCasePersonalInfo';
import NewCasePrescription from './newCasePrescription';
import NewCaseOfficeInfo from './newCaseOfficeInfo';

import UrxGenerator from './urxGenerator';

import '../css/newCase.css';
import reactCanvasDraw from './react-canvas-draw';


class NewCase extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            submit : false,
            canvasHtmlDataURL: ""
        }
        this.canvasHtml = new reactCanvasDraw();
        this.appliance_types = null;
    }

    returnsubmit = (canvasDrawDataStack, canvasHtml, appliance_types ) => {
        this.canvasDrawDataStack = canvasDrawDataStack;
        this.canvasHtml = canvasHtml;
        this.appliance_types = appliance_types;
        debugger;
    }
    
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
                        <NewCasePrescription submitted={this.returnsubmit}/>
                        <NewCaseOfficeInfo />
                    </form>
                </div>
                <UrxGenerator canvasDrawDataStack={this.canvasDrawDataStack} canvasHtmlDataURL={this.state.canvasHtmlDataURL} appliance_types ={this.appliance_types}/>
                <div className="newCase-submitBtn pt-5 pb-5">
                        <input type="button" value="Submit" className="btn btn-primary btn-lg btn-block" 
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(this.canvasHtml.ctx.drawing.canvas.toDataURL());
                                this.setState({canvasHtmlDataURL:this.canvasHtml.ctx.drawing.canvas.toDataURL()});
                                debugger;
                            }}/>
                </div>
            </div>
            </div>
        );
    }
}

export default NewCase;