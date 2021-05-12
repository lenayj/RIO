import React, { Component , useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap'


import '../css/newCase.css';


class NewCase extends Component {   
    /*Todo: When clicked U,L button on instructions field, add 'active' to className to toggle class*/
    addActiveClass() {
    
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

                        <div className="prescription mt-5">
                            <div className="part-header">
                                <h3>Prescription</h3>
                            </div>
                            <div className="part-value">
                                <div className="form-row drawing">
                                    <div className="form-group col-md-12">
                                        <img src="/images/appliance/teeth.png" alt="teeth"/>
                                    </div>
                                    {/*<div className="appliance form-group col-md-12">
                                        <Accordion defaultActiveKey="0">
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                &#183;&nbsp;Retainer
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>Hello! I'm the body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                                &#183;&nbsp;Pressform Appliance
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                                &#183;&nbsp;Removable Appliance
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                                &#183;&nbsp;Fixed Appliance
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="3">
                                                    <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                                &#183;&nbsp;Splint
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="4">
                                                    <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                                &#183;&nbsp;Distalizer Appliance
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="5">
                                                    <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                                &#183;&nbsp;Fixed Expander
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="6">
                                                    <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                                &#183;&nbsp;Functional Appliance
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="7">
                                                    <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card> 
                                        </Accordion>
        </div>*/}                   
                                    <div className="prescription form-group col-md-12">
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <b>Prescription</b><span className="expand float-right">&#43;</span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>Presctiption field</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>

                                    <div className="design form-group col-md-12">
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <b>Add Designs</b><span className="expand float-right">&#43;</span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>Design Panel</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                    <div className="band form-group col-md-12">
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <b>Add Band</b><span className="expand float-right">&#43;</span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <div class="inp-bands">
                                                            <select id="inp-bands" name="inp-bands">
                                                                <option value="select-NA">-- Select (Required) --</option>
                                                                <option value="request-bands">Please include bands (Additional charge applied per band)</option>
                                                                <option value="send-bands">Will send bands separately (Case will be pending until bands are received)</option>
                                                                <option value="not-required-bands">Not Applicable</option>
                                                            </select>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                    <div className="instructions form-group col-md-12">
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <b>Instructions</b><span className="expand float-right">&#43;</span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                    <div className="inp-instructions">
                                                        <label className="instructions instructions_u bc_u" id="Ball_Clasp_U"></label><label className="instructions instructions_l bc_l" id="Ball_Clasp_L"></label><label className="instruction_title">Ball Clasp</label>
                                                        <input type="text" name="inp-bc" id="inp-bc" value="false" hidden />
                                                        
                                                        <label className="instructions instructions_u cc_u" id="C_Clasp_U"></label><label className="instructions instructions_l cc_l" id="C_Clasp_L"></label><label className="instruction_title">"C" Clasp</label>
                                                        <input type="text" name="inp-cc" id="inp-cc" value="false" hidden />
                                                        
                                                        <label className="instructions instructions_u ac_u" id="Adams_Clasp_U"></label><label className="instructions instructions_l ac_l" id="Adams_Clasp_L"></label><label className="instruction_title">Adams Clasp</label>
                                                        <input type="text" name="inp-ac" id="inp-ac" value="false" hidden />
                                                        
                                                        <label className="instructions instructions_u pontic_u" id="Pontic_U"></label><label className="instructions instructions_l pontic_l" id="Pontic_L"></label><label className="instruction_title">Add Pontics</label>
                                                        <input type="text" id="pontic-txt" maxlength="35" /><input type="text" name="inp-pontic" id="inp-pontic" value="" hidden />
                                                        
                                                        <input type="checkbox" id="bc-u" hidden /><input type="checkbox" id="bc-l" hidden />
                                                        <input type="checkbox" id="cc-u" hidden /><input type="checkbox" id="cc-l" hidden />
                                                        <input type="checkbox" id="ac-u" hidden /><input type="checkbox" id="ac-l" hidden />
                                                        <input type="checkbox" id="pontic-u" hidden /><input type="checkbox" id="pontic-l" hidden />
                                                    </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                    <div className="requests form-group col-md-12">
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <b>Special Requests</b><span className="expand float-right">&#43;</span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <div className="inp-note">
                                                            <textarea name="inp-note" id="inp-note" placeholder="Special Requests Here"></textarea>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                    <div className="fileupload form-group col-md-12">
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <b>STL Upload</b><span className="expand float-right">&#43;</span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <div className="inp-file">
                                                            <input type="file" name="file" onChange={null}/>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="doctorOfficeInfo mt-5">
                            <div className="part-header">
                                <h3>Doctor/Office Information</h3>
                            </div>
                            <div className="part-value">
                                <div className="form-row">
                                    <div className="user-name float-left"><span>John Smith</span></div>
                                    <div className="defaultAddr-mark float-right"><p>&#10003; Your Default</p></div>
                                </div>
                                <div className="form-row doctor-license">Doctor License #:&nbsp; <span>12345</span></div>
                                <div className="form-row user-address">Address:&nbsp; <span>11917 FRONT ST, NORWALK, CA 90650</span></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="newCase-submitBtn pt-5 pb-5">
                        <input type="button" value="Submit" className="btn btn-primary btn-lg btn-block"/>
                </div>
            </div>
            </div>
        );
    }
}

export default NewCase;