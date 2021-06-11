import React, { Component } from 'react'
import '../css/newCase.css';

class NewCasePersonalInfo extends Component {

    NewCasePersonalInfo(){
        this.state={
            patientFirstName:null,
            patientLastName:null,
            duedate:null,
            Normal:null,
            Rush:null,
            case_from_name:null
        }
    }

    render(){
        this.props.casePersonalInfo(this.state);
        return ( 
            <div className="patientInfo">                
                <div className="part-header">
                    <h3>Patient Information</h3>
                </div>
                <div className="part-value">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div><span>Patient First Name</span></div>
                            <input type="text" className="form-control" name="patientFirstName"  onChange={(e)=>{this.setState({patientFirstName:e.target.value})}}/>                                                
                        </div>
                        <div className="form-group col-md-6">
                            <div><span>Patient Last Name</span></div>
                            <input type="text" className="form-control" name="patientLastName"  onChange={(e)=>{this.setState({patientLastName:e.target.value})}}/>
                        </div>  
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <div><span>Due Date</span></div>
                            <input type="date" className="form-control" name="duedate" onChange={(e)=>{this.setState({duedate:e.target.value})}}/>                                                
                        </div>
                        <div className="form-group col-md-5 deliveryType">
                            <div className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" name="delivery" value="Normal" onChange={(e)=>{this.setState({Normal:e.target.value})}}/>
                                <label className="form-check-label"><b>Normal</b></label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" name="delivery" value="Rush" onChange={(e)=>{this.setState({Rush:e.target.value})}}/>
                                <label className="form-check-label"><b>Rush</b></label>                                                    
                            </div>
                        </div> 
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6" >
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
                            <input type="text" className="form-control" name="case_from_name" onChange={(e)=>{this.setState({case_from_name:e.target.value})}}/>  
                        </div> 
                    </div>
                </div>
            </div>

                        
        );
    }
}

export default NewCasePersonalInfo;