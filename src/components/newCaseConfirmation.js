import React, { Component } from 'react'

class NewCaseConfirmation extends Component {

    render(){
        return (
            <div className="mt-5 mb-5">
                <h3 style={{textAlign: 'center'}}>Your Case has been submitted!</h3>
                {/*<p style={{textAlign: 'center'}}>You will recieve a recipient of your order on your email</p>*/}
            </div>
        );
    }
}

export default NewCaseConfirmation;