import {React, Component} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


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
          officeAddresses:[]
        };
      }

    selectAddress = (e) => {
      debugger;
        
      var selectedOfficeValue = e.target.value.split(',');
      var OfficeAddress = selectedOfficeValue[0] +", "+ selectedOfficeValue[1] +", "+ selectedOfficeValue[2] +", "+ selectedOfficeValue[3];
      var OfficeName = selectedOfficeValue[4];
      var phone = selectedOfficeValue[5];
      
      //alert(OfficeAddress + "Name: " + OfficeName + " Hours: "+ selectedOfficeValue[8]);
      
      /***split the value by comma and set office name / address / office hours***/
      //console.log(this.state.officeAddresses);
      this.setState({ defaultOfficeAddress: OfficeAddress });
      this.setState({ defaultOfficeName: OfficeName});
      this.setState({ phone: phone});
    }

    componentDidMount(){
      var yourConfig = {
          headers: {
             Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjI3MTA1Mjg1LCJpYXQiOjE2MjY4MDUyODUsImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.EClEoaTZ-G8pxlQ-O5niddluUbcuj2T6-fwmLy54Tqehcsw4ZgIqyXn7QXocl0Rvu_iw7igVJ5Oap8FQD0MIyA"
          }
       }

       axios.get("http://192.168.1.194:8443/viewAllAddresses?email=venkatesh@uniortholab.com",yourConfig).then((a) =>{
          //var addressesId,name, license, Email , Phone,street ,state,apartment,city,zipcode ,mainContactName ,mainContactEmail ,officeName ,officeHours ,officeLunchHours,addressesIds,office_work_days,is_default;
          
          var defaultOfficeAddress, phone, defaultOfficeName;

          defaultOfficeAddress = a.data[0].street + ", " +  a.data[0].state + ", " + a.data[0].city + ", " + a.data[0].zipcode;
          defaultOfficeName = a.data[0].officeName;
          phone = a.data[0].phone;

          debugger;
          //console.log(a.data);
          
          this.setState({defaultOfficeAddress:defaultOfficeAddress});
          this.setState({defaultOfficeName:defaultOfficeName});
          this.setState({phone:phone});
      
      })
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
                              <option value={[address.street, address.state, address.city, address.zipcode, address.officeName, address.phone]}
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