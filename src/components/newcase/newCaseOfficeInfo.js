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
          officeAddresses:[],
          Phone:"",
          overviewAddress:"",
          officeName:''
        };
      }

    selectAddress = (e) => {
      var selectedOfficeValue = this.state.officeAddresses[e.target.value];
      var OfficeAddress = selectedOfficeValue.street +", "+ selectedOfficeValue.apartment +", "+ selectedOfficeValue.state +", "+ selectedOfficeValue.city +", " + selectedOfficeValue.zipcode;
      var OfficeName = selectedOfficeValue.officeName;
      var phone = selectedOfficeValue.phone;

      
      
      /***split the value by comma and set office name / address / office hours***/
      this.setState({ overviewAddress: OfficeAddress });
      this.setState({ officeName: OfficeName});
      this.setState({ Phone: phone});
      this.props.caseOfficeInfo({
        street: selectedOfficeValue.street,
        state: selectedOfficeValue.state,
        apartment:selectedOfficeValue.apartment,
        city: selectedOfficeValue.city,
        zipcode: selectedOfficeValue.zipcode,
        Phone:phone,
        officeName:OfficeName
    });
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
            this.setState({overviewAddress: a.street +" "+ a.apartment + ", "+ a.state +", "+ a.city +", "+ a.zipcode});

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
                      <select className="custom-select" style={{width:"400px"}} onChange={this.selectAddress}>
                        {this.state.officeAddresses.map((address,index) => {
                            return <option value={index} key={address.id}>
                                {address.street}, {address.apartment}, {address.state}, {address.city}, {address.zipcode}
                            </option>
                        })}
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