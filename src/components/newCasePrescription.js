import React, { Component } from 'react'
import '../css/newCase.css';


class NewCasePrescription extends Component {

    render(){
        return ( 
            <div className="container newCase">
                <div>
                    <div className="newCase-form">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div><h3>Prescription</h3></div>
                                <form>
                                    <div>
                                        <div className="drawing"></div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default NewCasePrescription;