import React, { Component } from 'react'
import '../css/newCase.css';

class newCasePersonalInfo extends Component {

    render(){
        return ( 
            <div className="container newCase">
                <div>
                    <div className="newCase-form">
                        {/*
                        <div className="newCase-step text-left mb-4 mt-4">
                            <div className="bullet current"><span>1</span></div>
                            <div className="d-inline font-weight-bold mt-2 ml-3 mr-3 ">Personal Information</div>
                            <div className="bullet"><span>2</span></div>
                            <div className="d-inline mt-2 ml-3">Make Prescription</div>
                        </div>*/}
                        <br/>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form>
                                    <div className="preInfo doctorInfo">
                                        <div className="part-header">
                                            <h3>Doctor/Office Information</h3>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-8">
                                                <div><span>Docter Name/ Office Name</span></div>
                                                <input type="text" className="form-control" name="docterNameOrOfficeName"/>                                                
                                            </div>
                                            <div className="form-group col-md-4">
                                                <div><span>License #</span></div>
                                                <input type="text" className="form-control" name="licenseNumber"/>
                                            </div>  
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <div><span>Address line1</span></div>
                                                <input type="text" className="form-control" name="address"/>                                                
                                            </div>  
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <div><span>City</span></div>
                                                <input type="text" className="form-control" name="city"/>                                                
                                            </div>
                                            <div className="form-group col-md-2">
                                                <div><span>State</span></div>
                                                <input type="text" className="form-control" name="state"/>                                                
                                            </div> 
                                            <div className="form-group col-md-3">
                                                <div><span>Zip Code</span></div>
                                                <input type="text" className="form-control" name="zip"/>                                                
                                            </div>   
                                        </div>
                                    </div>

                                    <div className="preInfo patientInfo">
                                        <div className="part-header">
                                            <h3>Patient Information</h3>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <div><span>Patient First Name</span></div>
                                                <input type="text" className="form-control" name="patientFirstName"/>                                                
                                            </div>
                                            <div className="form-group col-md-6">
                                                <div><span>Patient Last Name</span></div>
                                                <input type="text" className="form-control" name="patientLastName"/>
                                            </div>  
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-5">
                                                <div><span>Due Date</span></div>
                                                <input type="date" className="form-control" name="duedate"/>                                                
                                            </div>
                                            <div className="form-group col-md-5 deliveryType">
                                                <div className="form-check form-check-inline">
                                                    <input type="checkbox" className="form-check-input" name="delivery" value="Normal"/>
                                                    <label className="form-check-label">Normal</label>
                                                </div>    
                                                <div className="form-check form-check-inline">
                                                    <input type="checkbox" className="form-check-input" name="delivery" value="Rush"/>
                                                    <label className="form-check-label">Rush</label>                                                    
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <div className="text-danger"><span>*FOR 3D CASES ONLY</span></div>
                                                <select className="form-control" id="case_from" name="case_from">
                                                    <option value="NA">-- Select (Required) --</option>
                                                    <option value="univRx">**Universal Rx (PREFER)**</option>
                                                    <option value="itero">iTero</option>
                                                    <option value="3m">3M</option>
                                                    <option value="3shape">3Shape</option>
                                                    <option value="carestream">CareStream</option>
                                                    <option value="easyrx">Easy Rx</option>
                                                </select>                                                
                                            </div>
                                            <div className="form-group col-md-6">
                                                <div><span>Provider Case ID / File Name</span></div>
                                                <input type="text" className="form-control" name="case_from_name"/>  
                                            </div> 
                                        </div>
                                    </div>    
                                </form>

                            </div>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default newCasePersonalInfo;