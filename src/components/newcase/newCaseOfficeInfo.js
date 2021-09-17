import {React, Component} from "react";
import { Link } from 'react-router-dom';
import {viewAllAddresses} from "../../actions/AddressActions"
import { myInformation } from '../../actions/userActions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class NewCaseOfficeInfo extends Component {
    constructor() {
        super();
        this.state = {
          street: "",
          state: "",
          apartment:"",
          city: "",
          zipcode: "",
          docName:"",
          addresses:[],
          officeAddresses:[],
          defaultOfficeAddress:"",
          phone:"",
          overviewAddress:"",
        };
      }

    selectAddress = (e) => {
      
      var selectedOfficeValue = e.target.value.split(',');
      var OfficeAddress = selectedOfficeValue[0] +", "+ selectedOfficeValue[1] +", "+ selectedOfficeValue[2] +", "+ selectedOfficeValue[3] +", "+ selectedOfficeValue[4];
      var OfficeName = selectedOfficeValue[5];
      var phone = selectedOfficeValue[6];
      
      /***split the value by comma and set office name / address / office hours***/
      this.setState({ overviewAddress: OfficeAddress });
      this.setState({ officeName: OfficeName});
      this.setState({ Phone: phone});
    }

    componentDidMount(){
    
        this.props.viewAllAddresses().then((a)=>{
            this.setState({officeAddresses:a});
        });

        this.props.myInformation().then((a)=>{
            this.setState({docName:a.name});
            this.setState({Phone:a.Phone});
            this.setState({state: a.state});
            this.setState({street:a.street });
            this.setState({apartment:a.apartment });
            this.setState({city:a.city});
            this.setState({zipcode:a.zipcode});
            this.setState({officeName:a.officeName});
            this.setState({officeHours:a.officeHours});
            this.setState({officeLunchHours:a.officeLunchHours});

        });

        var OverviewAddress = this.state.street +" "+ this.state.apartment + ", "+ this.state.state +", "+ this.state.city +", "+ this.state.zipcode;
        this.setState({overviewAddress: OverviewAddress})

  }

    render(){
        return (
            <div className="doctorOfficeInfo mt-5">
                <div className="part-header">
                    <h3>Doctor/Office Information</h3>
                </div>

                <div className="office-addresses mb-3">
                    <div className="addresses-list">
                      <select className="custom-select" style={{width:"400px"}} value={this.state.street} onChange={this.selectAddress}>
                          {this.state.officeAddresses.map((address) => (
                              <option value={[address.street, address.apartment, address.state, address.city, address.zipcode, address.officeName, address.user.phoneNumber]}
                                      key={address.id}>
                                  {address.street}, {address.apartment}, {address.state}, {address.city}, {address.zipcode}
                              </option>
                          ))}
                      </select>
                    </div>
                    <div className="address-edit"><Link to= '/myinfo' target="_blank" className="links">Edit</Link></div>
                </div>
                
                <div className="part-value">
                    <div className="defaultAddr-mark"><p>&#10003; Your Default</p></div>
                    <div className="form-row user-name"><span>Doctor Name:&nbsp;</span>{this.state.docName}</div>
                    <div className="form-row office-nema"><span>Office Name:&nbsp;</span>{this.state.officeName}</div>
                    <div className="form-row user-address"><span>Address:&nbsp;</span>{this.state.overviewAddress}</div>
                    <div className="form-row phone"><span>Phone:&nbsp;</span>{this.state.Phone}</div>
                </div>
            </div>
        );
    }
}

NewCaseOfficeInfo.propTypes = {
    isAuthenticated: PropTypes.object.isRequired,
    viewAllAddresses: PropTypes.func.isRequired,
    myInformation: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
    user: state.user,
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps, {viewAllAddresses,myInformation})(NewCaseOfficeInfo);