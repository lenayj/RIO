import React, { Component } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../../css/pagination.css';

    

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
        this.getData();
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
        return tableData.length > 0 
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
                          this.state.tableData.map((tdata, i) => (
                                <tr key={tdata.id}>
                                    <td># {tdata.id}</td>
                                    <td>{tdata.userId}</td>
                                    <td>{tdata.title}</td>
                                    <td>$ {tdata.userId}</td>
                                    <td><span className="paid">PAID</span></td>
                                    <td>
                                        <a href="https://in.xero.com/U1FCmXxE4cWfDs9XH62PDllUJS9brKWSCcspyRWO" target="_blank" rel="noreferrer">
                                            <input type="button" className="view-invoices btn btn-primary" value="View"/>
                                        </a>
                                    </td>
                                </tr>
                            
                          ))
                        }

                     </tbody>
                 </table>   
                
                <div className="text-right">{dataTotal} Entries in Total </div>

                 <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
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

export default Invoices;