import React, { Component } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../../css/pagination.css';
import { connect } from "react-redux";
import { getInvoices } from '../../actions/invoiceActions';
import PropTypes from 'prop-types';
    

class Invoices extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 10,
            currentPage: 0,
            isLoading: false,
            isError: false,
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

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice,
		})
	
    }

   componentDidMount(){
    if(!this.props.isAuthenticated){
        this.props.history.push("/Login");
        window.location.reload();
    }
        this.props.getInvoices();
    }
    getData() {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                var tdata = res.data;
                //console.log('data-->'+JSON.stringify(tdata))
				var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(tdata.length / this.state.perPage),
                    orgtableData : tdata,
                    tableData:slice,
                    dataTotal:tdata.length
                })
            });
    }


    render() {
        const {tableData,dataTotal,isLoading, isError} = this.state
        
        if(isLoading){
        return <div>Loading...</div>
        }

        if(isError){
        return <div>Error...</div>
        }
        return this.props.invoice.invoice.length > 0 
        ? (
            <div className="table-width invoices">
                 <div class="myInvoices-banner text-left mb-5 mt-4"><h1 className="title-wording">My Invoices</h1></div>                

                 <div>{this.orgtableData}</div>
                 <table className="table">
                     <thead>
                        <tr>
                            <th>INVOICE NO.</th>
                            <th>DATE</th>                            
                            <th>PATIENT NAME</th>
                            <th>TOTAL</th>
                            <th>STATUS</th>                            
                            <th>INVOICE</th>
                        </tr>
                     </thead>
                     {/*Todo:: Key modify required here*/}
                     <tbody>
                        {
                          this.props.invoice.invoice.map((tdata, i) => (
                                <tr key={tdata.id}>
                                    <td># {tdata.id}</td>
                                    <td>{tdata.updatedDateUTC}</td>
                                    <td>{tdata.status}</td>
                                    <td>$ {tdata.total}</td>
                                    <td><span className="paid">{tdata.status}</span></td>
                                    <td>
                                        <a href={tdata.onlineInvoiceUrl} target="_blank" rel="noreferrer">
                                            <input type="button" className="view-invoices btn btn-primary" value="View"/>
                                        </a>
                                    </td>
                                </tr>
                            
                          ))
                        }

                     </tbody>
                 </table>   
                
                <div className="text-right">{this.props.invoice.invoice.length} Entries in Total </div>

                 <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.props.invoice.invoice.length}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        ):(
            <div>There is No Invoice List</div>
          )
    }
}
Invoices.propTypes = {
    getInvoices: PropTypes.func.isRequired,
    invoice: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    invoice: state.invoice,
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps, {getInvoices})(Invoices);