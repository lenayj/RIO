import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const options = [
    {
      label: "Select Office Address",
      value: "",
    },
    {
      label: "11917 Front St, Norwalk, CA 90060",
      value: "11917 Front St, Norwalk, CA 90060",
    },
    {
      label: "140 S Reno st, LA, CA 90057",
      value: "140 S Reno st, LA, CA 90057",
    },
    {
      label: "345 Lafayette park PL, LA, CA 90057",
      value: "345 Lafayette park PL, LA, CA 90057",
    },
  ];

class NewCaseOfficeInfo extends Component {
    constructor() {
        super();
        this.state = {
          pickupAddress: ''
        };
      }

    selectAddress = (e) => {
        console.log('address selected');
        this.setState({ pickupAddress: e.target.value });
    }

    render(){
        return (
            <div className="doctorOfficeInfo mt-5">
                <div className="part-header">
                    <h3>Doctor/Office Information</h3>
                </div>

                <div className="office-addresses mb-3">
                    <div className="addresses-list">
                        <select className="custom-select" style={{width:"400px"}} value={this.state.pickupAddress} onChange={this.selectAddress}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="address-edit"><Link to= '/myinfo' target="_blank" className="links">Edit</Link></div>
                </div>
                
                <div className="part-value">
                    <div className="defaultAddr-mark"><p>&#10003; Your Default</p></div>
                    <div className="form-row user-name"><span>Doctor Name:&nbsp;</span> John Smith</div>
                    <div className="form-row office-nema"><span>Office Name:&nbsp;</span> John Dentistry</div>
                    <div className="form-row user-address"><span>Address:&nbsp;</span>{this.state.pickupAddress}</div>
                    <div className="form-row phone"><span>Phone:&nbsp;</span> 000-000-0000</div>
                </div>
            </div>
        );
    }
}
export default NewCaseOfficeInfo;