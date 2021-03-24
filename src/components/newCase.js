import React, { Component } from 'react'

class NewCase extends Component {

    render(){
        return ( 
            <div className="container newCase">
                <div>
                    <div className="newCase-form">
                        <div className="newCase-banner text-left mb-4 mt-4">
                            <h3>New Case</h3>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form>
                                    <div className="doctorInfo">
                                        <div className="part-header">
                                            <h5>Doctor/Office Information</h5>
                                        </div>
                                        <div className="row form-input">
                                            <div className="col-md-8">
                                                <div><span>Docter Name/ Office Name</span></div>
                                                <input type="text" className="form-control" name="docterNameOrOfficeName"/>                                                
                                            </div>
                                            <div className="col-md-4">
                                                <div><span>License #</span></div>
                                                <input type="text" className="form-control" name="licenseNumber"/>
                                            </div>  
                                        </div>
                                        <div className="row form-input">
                                            <div className="col-md-12">
                                                <div><span>Address line1</span></div>
                                                <input type="text" className="form-control" name="address"/>                                                
                                            </div>  
                                        </div>
                                        <div className="row form-input">
                                            <div className="col-md-4">
                                                <div><span>City</span></div>
                                                <input type="text" className="form-control" name="city"/>                                                
                                            </div>
                                            <div className="col-md-4">
                                                <div><span>State</span></div>
                                                <input type="text" className="form-control" name="state"/>                                                
                                            </div> 
                                            <div className="col-md-4">
                                                <div><span>Zip Code</span></div>
                                                <input type="text" className="form-control" name="zip"/>                                                
                                            </div>   
                                        </div>
                                    </div>

                                    <div className="patientInfo">
                                        <div className="part-header">
                                            <h5>Patient Information</h5>
                                        </div>
                                        <div className="row form-input">
                                            <div className="col-md-6">
                                                <div><span>Patient First Name</span></div>
                                                <input type="text" className="form-control" name="patientFirstName"/>                                                
                                            </div>
                                            <div className="col-md-6">
                                                <div><span>Patient Last Name</span></div>
                                                <input type="text" className="form-control" name="patientLastName"/>
                                            </div>  
                                        </div>
                                        <div className="row form-input">
                                            <div className="col-md-6">
                                                <div><span>Due Date</span></div>
                                                <input type="date" className="form-control" name="duedate"/>                                                
                                            </div>
                                            <div className="col-md-3">
                                                <label><input type="checkbox" className="form-control" name="delivery" value="Normal"/>Normal</label>
                                                <label><input type="checkbox" className="form-control" name="delivery" value="Rush"/>Rush</label>
                                            </div> 
                                        </div>
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

export default NewCase;