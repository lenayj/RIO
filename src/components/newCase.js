import React, { Component , useState } from 'react';
import { MultiStepForm, Step } from 'react-multi-form'
import styled from 'styled-components';
import '../css/newCase.css';
import NewCasePersonalInfo from './newCasePersonalInfo'
import NewCasePrescription from './newCasePrescription'
import NewCaseConfirmation from './newCaseConfirmation'

class NewCase extends Component {

    state = {
        active: 1
    };

    handleIncrease = () => {
        this.setState({
            active: this.state.active + 1
        });
      };

    handleDecrease = () => {
        this.setState({
            active: this.state.active - 1
        });
      };

    render(){
        const {active} = this.state;
        //console.log(active);

       const Container = styled.div`
                            max-width: 900px;
                            margin: 40px auto;
                            @media(max-width: 590px) {
                                width: 600px;
                            }`                        
        
        return (
            <div className="container newCase">
            <div className="newCase-banner text-left mb-4 mt-4">
                        <h1 className="title-wording">New Case</h1>
            </div> 
            <Container>
                <MultiStepForm activeStep={active}>
                    <Step label='Personal Information'>
                    <NewCasePersonalInfo />
                    </Step>
                    <Step label='Prescription'>
                    <NewCasePrescription />
                    </Step>
                    <Step label='confirmation'>
                    <NewCaseConfirmation />
                    </Step> 
                </MultiStepForm>

                {active !== 1 && (
                   <button className="newCase-btn" onClick={this.handleDecrease}>Previous</button>
                )}
                {active !== 3 && (
                    <button className="newCase-btn"
                    onClick={this.handleIncrease} style={{ float: 'right' }} > Next </button>
                )}
            </Container>
            </div>
        );
    }
}

export default NewCase;