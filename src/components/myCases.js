import React, { Component } from 'react'

class MyCases extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      myCase: [],
      isLoading: false,
      isError: false
    }
  }

  /*async function get request*/
  async componentDidMount() {
    
    this.setState({isLoading: true})
    /*Get User Cases List data from below
    :: URL mod needed here*/
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    if (response.ok) {
      const myCase = await response.json()
      this.setState({myCase,isLoading:false})
    } else {
      this.setState({isError:true,isLoading:false})
    }

  }
  
  /* Set Attribute as a Table Header */
  renderTableHeader = () => {
    return Object.keys(this.state.myCase[0]).map(attr => <th key={attr}>
      {attr.toUpperCase()}
    </th>)
  }

  /* Set Data in a Table Row
  :: Modify needed */
  renderTableRows = () => {
    return this.state.myCase.map(cases => {
      return (
        <tr key={cases.id}>
          {/*Case No field 'case_id'*/}
          <td>{cases.id}</td>
          {/*Data Sent field 'reg_data'*/}
          <td>{cases.name}</td>
          {/*Patient Name field 'patient_first_name' + 'patient_last_name'*/}
          <td>{cases.username}</td>
          {/*Labslip field 'img_name'
          :: Link required
          :: <td><a href={cases.img_name} target="_blank">View</a></td>*/}
          <td>{cases.email}</td>
          {/*STL File field 'file_name'
          :: if !files -> Not Uploaded else File Link required*/}
          <td>
            {`${cases.address.street},${cases.address.city}`}
          </td>
          {/*Status field 'status'*/}
          <td>{cases.phone}</td>
          {/*Question field 'case_id'*/}
          <td>{cases.website}</td>
          <td><button id={cases.id} className="openMsg">Leave a message</button></td>
        </tr>
      )
    })
  }


  render() {
    const {myCase, isLoading, isError} = this.state
    
    if(isLoading){
      return <div>Loading...</div>
    }

    if(isError){
      return <div>Error...</div>
    }

    return myCase.length > 0
    /* myCase.length is grater than 0 Loop ?(true) :(false) */
    ? (
      <div>
        <div>
          <h1 className="title-wording">My Cases</h1>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                {this.renderTableHeader()}
              </tr>
            </thead>
            <tbody id="user-cases">
              {this.renderTableRows()}
            </tbody>
          </table>
        </div>
        <div className="case-pagination">
	        <span className="left" id="total_reg"></span>
	        <ul className="pagination pager" id="case-pager"></ul>
	      </div>
      </div>
    ):(
      <div>There is No Case List</div>
    )
  }
}

export default MyCases;