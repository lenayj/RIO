import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';

/*global google*/
class EditAddr extends Component {    
    
    constructor(props) {
        super(props)
        this.state = this.initialState()
        // this is to set the initial state of the component
        
        this.state = {
            page: props.location.state.page
        }
        this.autocomplete = null
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // as you probably
        // know, if you're going to be passing functions around and invoke them as
        // callbacks, you'll need to hold onto 'this' because it's bound at runtime
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
    
        this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
      }
    
      initialState() {
        // woohoo, just an object that represents an empty parlor
        return {
          street_address: '',
          city: '',
          state: '',
          zip_code: '',
          googleMapLink: ''
        }
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }

      handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace()
        let address = addressObject.address_components
        
        //console.log(address)

        if (address[2].types[0] === "locality") {
           this.setState({
                street_address: `${address[0].long_name} ${address[1].long_name}`,
                city: address[2].long_name,
                state: address[4].short_name,
                zip_code: address[6].short_name,
                googleMapLink: addressObject.url
              })
        } else if(address[3].types[0] === "locality") {
            this.setState({
                street_address: `${address[0].long_name} ${address[1].long_name}`,
                city: address[3].long_name,
                state: address[5].short_name,
                zip_code: address[7].short_name,
                googleMapLink: addressObject.url
            })
        } 
        
      }
    
      handleSubmit(event) {
        event.preventDefault()
      }
    
    render(){
        return (
            <div className="dashboard-bg-color">
                <div className="container myacct editAddr">
                    <div className="directory pt-4">
                        <div className="row pt-3">
                        <Link to= '/myAccount' className="links"><div className="col text-secondary">My Account &gt;&nbsp;</div></Link>
                        <Link to= '/officeAddr' className="links"><div className="col text-secondary">Office Addresses &gt;&nbsp;</div></Link>
                        { (this.state.page === 'New') 
                            ? <div className="col text-dark">New Addresses</div>  
                            : <div className="col text-dark">Edit Addresses</div> 
                        }
                        </div>
                    </div>
                    <div className="myacct-banner text-left">
                        { (this.state.page === 'New') 
                            ? <h1 className="title-wording">New Addresses</h1>
                            : <h1 className="title-wording">Edit Addresses</h1>
                        }
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="editAddr default pt-3">
                            <div className="officeInfo mb-3">                
                                <div className="part-header mb-4">
                                    <h3><b>Doctor/Office Information</b></h3>
                                </div>
                                <div className="part-value">
                                    <div className="form-row">
                                        <div className="form-group col-md-9">
                                            <div><span>Doctor Name/ Office Name</span></div>
                                            <input type="text" className="form-control" name="doctorOrOfficeName"/>                                                
                                        </div>
                                        <div className="form-group col-md-3">
                                            <div><span>License#</span></div>
                                            <input type="text" className="form-control" name="licenseNum"/>
                                        </div>  
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12"> 
                                            <input id="autocomplete" className="form-control input-field" type="text"/> 
                                        </div>
                                        <div className="form-group col-md-12">
                                            <div><span>Street Address</span></div>
                                            <input className="form-control"
                                                name={"street_address"}
                                                value={this.state.street_address || ''}
                                                onChange={this.handleChange}/>                                                
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-5">
                                            <div><span>City</span></div>
                                            <input className="form-control" 
                                                    name={"city"}
                                                    value={this.state.city || ''}
                                                    onChange={this.handleChange}/>                                                
                                        </div>
                                        <div className="form-group col-md-3">
                                            <div><span>State</span></div>
                                            <input className="form-control" 
                                                    name={"state"}
                                                    value={this.state.state || ''}
                                                    onChange={this.handleChange}/>  
                                        </div> 
                                        <div className="form-group col-md-2">
                                            <div><span>Zip</span></div>
                                            <input className="form-control" 
                                                    name={"zip_code"}
                                                    value={this.state.zip_code || ''}
                                                    onChange={this.handleChange}/>  
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="officeInfo date-and-hours">
                            <div className="part-header mb-4">
                                <h3><b>Office Hours</b></h3>
                            </div>
                            <div className="part-value">
                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <div><b>Day:</b></div>
                                    </div>
                                    <div className="form-group col-md-8">
                                        <input type="button" className="day btn btn-outline-secondary" value="Mon"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Tue"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Wed"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Thu"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Fri"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Sat"/>
                                        <input type="button" className="day btn btn-outline-secondary" value="Sun"/>
                                    </div>  
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <div><b>Business Hours:</b></div>
                                    </div>
                                    <div className="form-group col-md-8">
                                        <TimeRangePicker
                                            clockIcon={null}
                                            clearIcon={null}
                                            disableClock={true}
                                            clockClassName="office-hours"
                                        />
                                        
                                    </div>  
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <div><b>Lunch Hours:</b></div>
                                    </div>
                                    <div className="form-group col-md-8">
                                        <TimeRangePicker
                                            clockIcon = {null}
                                            clearIcon={null}
                                            disableClock={true}
                                            clockClassName="office-hours"
                                        />
                                    </div>  
                                </div>
                            </div>
                        </div>

                        <div className="checkbox mt-4">
                            <div className="defaultAddress">
                                <input type='checkbox' name='defaultAddress' value='defaultAddress'/> Make this as a default address
                            </div>
                        </div>
                        <div className="save mt-4 mb-5">
                            <div className="save-btn">
                                <input type="button" value="Save" className="btn btn-primary btn-lg" />
                            </div>
                        </div>
                    </div>
                </div> 
        );
    }
}

export default EditAddr;