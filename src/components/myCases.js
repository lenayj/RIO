import React, { Component } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
// import '../css/pagination.css';
// import '../css/myCases.css';
import { connect } from "react-redux";
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

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
        // const {tableData,isLoading, isError} = this.state
        // debugger;
        // if(isLoading){
        // return <div>Loading...</div>
        // }

        // if(isError){
        // return <div>Error...</div>
        // }
        return this.state.tableData.length > 0 
        ? (
            <div className="myCases">
                 <h1 className="title-wording">My Cases</h1>

                 <table className="table">
                     <thead>
                        <tr>
                            <th>CASE NO.</th>
                            <th>STATUS</th>                            
                            <th>PATIENT NAME</th>
                            <th>LABSLIP</th>
                            <th>STL FILES</th>                            
                            <th>DATA SENT</th>
                            <th>QUESTION</th>
                        </tr>
                     </thead>
                     {/*Todo:: Key modify required here*/}
                     <tbody>
                        {
                            this.props.item.items.map((tdata, i) => (
                                <tr key={tdata.id}>
                                    {/*Case No field 'case_id'*/}
                                    <td>{tdata.id}</td>
                                    {/*Data Sent field 'reg_data'*/}
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
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, {getItems})(MyCases);