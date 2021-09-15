import React, { Component } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
// import '../css/pagination.css';
// import '../css/myCases.css';
import { connect } from "react-redux";
import { getItems } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import '../../css/pagination.css';
import '../../css/myCases.css';
import Login from '../login/Login';

class MyCases extends Component {

    constructor(props) {
        debugger;
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 10,
            currentPage: 0,
            isLoading: false,
            isError: false
        }

        this.handlePageClick = this.handlePageClick.bind(this);

    }

    makeLinkForAttachments = (attachments) => {
        var i = 0;
        return attachments.map((attachment) => {
            return <a href={attachment.filepath}>STL FILE {i++} </a>;
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    /* Call Open Msg Modal */
    // openMSG = (e) => {
    //     const case_id = e.target.id
    //     const url = 'http://localhost:3000/renderOpenMSG'
    //     window.open(url+'?msgurl="' + url + '"&caseid='+ case_id, "Messenger", "width=350, height=400")
    // }

    loadMoreData() {
        debugger;
		const data = this.props.item.items;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
    }

   componentDidMount(){
       debugger;
       this.props.getItems();
       
        // this.getData();
        // this.getData();
    }
    
    // getData() {
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/users')
    //         .then(res => {
    //             var tdata = res.data;
	// 			var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
    //             this.setState({
    //                 pageCount: Math.ceil(tdata.length / this.state.perPage),
    //                 orgtableData : tdata,
    //                 tableData:slice
    //             })
    //         });
    // }

    render() {
        debugger;
        const {tableData,isLoading, isError} = this.state
        debugger;
        if(isLoading){
        return <div>Loading...</div>
        }

        if(isError){
        return <div>Error...</div>
        }

        if(!this.props.isAuthenticated){
            this.props.history.push("/Login");
            window.location.reload();
        }

        return this.props.item.items.length > 0 
        ? (
            <div className="table-width myCases">
                 <h1 className="title-wording">My Cases</h1>

                 <table className="table">
                     <thead>
                        <tr>
                            <th>CASE NO.</th>
                            <th>STATUS</th>                            
                            <th>PATIENT NAME</th>
                            <th>LABSLIP</th>
                            <th>STL FILES</th>                            
                            <th>DATE SENT</th>
                            <th>QUESTION</th>
                        </tr>
                     </thead>
                     {/*Todo:: Key modify required here*/}
                     <tbody>
                        {
                            this.props.item.items.map((tdata, i) => (
                                <tr key={tdata.id}>
                                <td>{tdata.case_id}</td>
                                    {/*Case No field 'case_id'*/}
                                    <td>{tdata.status}</td>
                                    {/*Data Sent field 'reg_data'*/}
                                    <td>{tdata.patient_first_name + " " + tdata.patient_last_name}</td>
                                    <td><a href={tdata.img_name}>CASE IMAGE</a></td>
                                    <td>{this.makeLinkForAttachments(tdata.fileAttachments)}</td>
                                    <td>{tdata.reg_date}</td>
                                    <td><button id={tdata.id} onClick={this.openMSG}>Leave a message</button></td>
                                </tr>
                          ))
                        }

                     </tbody>
                 </table>   
                
                <div>{this.props.item.items.length} Entries in Total </div>
                {/* <div className="text-right">{tableData.length} Entries in Total </div> */}

                 <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        ):(
            <div>There is No Case List</div>
          )
    }
}

MyCases.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps, {getItems})(MyCases);