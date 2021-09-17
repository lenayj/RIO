import {React, Component} from "react";
import { Link } from 'react-router-dom';
import {viewAllAddresses} from "../../actions/AddressActions"

import { connect } from "react-redux";
import PropTypes from 'prop-types';

class NewCaseOfficeInfo extends Component {
    constructor() {
        super();
        this.state = {
          street: "",
          apartment:"",
          city: "",
          zipcode: "",
          email:"",
          docName:"",
          docLicense: "",
          docAddress: "",
          docOfficeHours:"",
          addresses:[],
          addressId:"",
          officeAddresses:[],
          defaultOfficeAddress:"",
          phone:"",
          doctorName:"",
          defaultOfficeName:""
        };
      }

    selectAddress = (e) => {
      
      var selectedOfficeValue = e.target.value.split(',');
      var OfficeAddress = selectedOfficeValue[0] +", "+ selectedOfficeValue[1] +", "+ selectedOfficeValue[2] +", "+ selectedOfficeValue[3];
      var OfficeName = selectedOfficeValue[4];
      var phone = selectedOfficeValue[5];
      
      //alert(selectedOfficeValue[5]);
      
      /***split the value by comma and set office name / address / office hours***/
      //console.log(this.state.officeAddresses);
      this.setState({ defaultOfficeAddress: OfficeAddress });
      this.setState({ defaultOfficeName: OfficeName});
      this.setState({ phone: phone});
    }

    componentDidMount(){
      this.props.viewAllAddresses().then((a)=>{
        var officeAddresses, defaultOfficeAddress, phone, doctorName, defaultOfficeName;

        officeAddresses = a.data;
        defaultOfficeAddress = a.data[0].street + ", " +  a.data[0].state + ", " + a.data[0].city + ", " + a.data[0].zipcode;
        defaultOfficeName = a.data[0].officeName;
        phone = a.data[0].user.phoneNumber;
        doctorName = a.data[0].user.firstName + " " + a.data[0].user.lastName

        //debugger;
        console.log(a.data);
        
        this.setState({officeAddresses:officeAddresses});
        this.setState({defaultOfficeAddress:defaultOfficeAddress});
        this.setState({defaultOfficeName:defaultOfficeName});
        this.setState({phone:phone});
        this.setState({doctorName:doctorName});
    });
  }

    render(){
        return (
            <div className="doctorOfficeInfo mt-5">
                <div className="part-header">
                    <h3>Doctor/Office Information</h3>
                </div>

                <div className="office-addresses mb-3">
                    <div className="addresses-list">
                      <select className="custom-select" style={{width:"400px"}} value={this.state.defaultOfficeAddress} onChange={this.selectAddress}>
                          {this.state.officeAddresses.map((address) => (
                              <option value={[address.street, address.state, address.city, address.zipcode, address.officeName, address.user.phoneNumber]}
                                      key={address.id}>
                                  {address.street}, {address.state}, {address.city}, {address.zipcode}
                              </option>
                          ))}
                      </select>
                    </div>
                    <div className="address-edit"><Link to= '/myinfo' target="_blank" className="links">Edit</Link></div>
                </div>
                
                <div className="part-value">
                    <div className="defaultAddr-mark"><p>&#10003; Your Default</p></div>
                    <div className="form-row user-name"><span>Doctor Name:&nbsp;</span>{this.state.doctorName}</div>
                    <div className="form-row office-nema"><span>Office Name:&nbsp;</span>{this.state.defaultOfficeName}</div>
                    <div className="form-row user-address"><span>Address:&nbsp;</span>{this.state.defaultOfficeAddress}</div>
                    <div className="form-row phone"><span>Phone:&nbsp;</span>{this.state.phone}</div>
                </div>
            </div>
        );
    }
}

NewCaseOfficeInfo.propTypes = {
    isAuthenticated: PropTypes.object.isRequired,
    viewAllAddresses: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user,
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps, {viewAllAddresses})(NewCaseOfficeInfo);