import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../css/pagination.css';
import '../css/myCases.css';
    

export class MyCases extends PureComponent {

    constructor(props) {
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
    openMSG = (e) => {
        const case_id = e.target.id
        const url = 'http://localhost:3000/renderOpenMSG'
        window.open(url+'?msgurl="' + url + '"&caseid='+ case_id, "Messenger", "width=350, height=400")
    }

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

   componentDidMount(){
        this.getData();
    }
    getData() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                var tdata = res.data;
                //console.log('data-->'+JSON.stringify(tdata))
				var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(tdata.length / this.state.perPage),
                    orgtableData : tdata,
                    tableData:slice
                })
            });
    }


    render() {
        const {tableData,isLoading, isError} = this.state
    
        if(isLoading){
        return <div>Loading...</div>
        }

        if(isError){
        return <div>Error...</div>
        }
        return tableData.length > 0 
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
                          this.state.tableData.map((tdata, i) => (
                                <tr key={tdata.id}>
                                    {/*Case No field 'case_id'*/}
                                    <td>{tdata.id}</td>
                                    {/*Data Sent field 'reg_data'*/}
                                    <td>{tdata.name}</td>
                                    {/*Patient Name field 'patient_first_name' + 'patient_last_name'*/}
                                    <td>{tdata.username}</td>
                                    {/*Labslip field 'img_name'
                                    :: Link required
                                    :: <td><a href={tdata.img_name} target="_blank" rel="noreferrer">View</a></td>*/}
                                    <td>{tdata.email}</td>
                                    {/*STL File field 'file_name'
                                    :: if !files -> Not Uploaded else File Link required
                                    Refer)) <td>{`${tdata.website}` === 'kale.biz' 
                                    ? <a href={tdata.img_name} className="stl_file" id='stl_file' target="_blank">View & Download</a> 
                                    : 'Not Uploaded'}</td>*/}
                                    <td>
                                        {`${tdata.address.street},${tdata.address.city}`}
                                    </td>
                                    {/*STATUS field 'status'*/}
                                    <td>{tdata.website}</td>
                                    {/*Message field 'case_id'*/}
                                    <td><button id={tdata.id} onClick={this.openMSG}>Leave a message</button></td>
                                </tr>
                            
                          ))
                        }

                     </tbody>
                 </table>   
                
                <div className="text-right">{tableData.length} Entries in Total </div>

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
            <div>There is No Case List</div>
          )
    }
}

export default MyCases;