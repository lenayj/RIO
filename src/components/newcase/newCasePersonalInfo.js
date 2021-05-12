import React, { Component } from 'react'
import '../../css/newCase.css';

class NewCasePersonalInfo extends Component {

    render(){
        return ( 
            <div className="patientInfo">                
                <div className="part-header">
                    <h3>Patient Information</h3>
                </div>
                <div className="part-value">
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
                                <label className="form-check-label"><b>Normal</b></label>
                            </div>    
                            <div className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" name="delivery" value="Rush"/>
                                <label className="form-check-label"><b>Rush</b></label>                                                    
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
            </div>

                        
        );
    }
}

export default NewCasePersonalInfo;