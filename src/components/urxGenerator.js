import { Component } from "react"

 class UrxGenerator extends Component{
    
    constructor(props,applianceUpperSrc  = "", applianceLowerSrc  = ""){
        super(props);
        this.state  = {
            formImageSrc  : "/images/newcase/form/form.png",
            caseId  : "",
            doctorOfficeName  : "",
            addr  : "",
            city  : "",
            state  : "",
            zip  : "",
            phone  : "",
            email  : "",
            patientFirstName  : "",
            patientLastName  : "",
            deliveryType  : "",
            dueDate  : "Normal",
            color  : "",
            applianceUpperSrc  : applianceUpperSrc,
            applianceLowerSrc  : applianceLowerSrc, 
            drawingData  : "",
            ballClasp  : "",
            cClasp   : "",
            adams  : "",
            pontics  : "",
            notes  : "",
            imgName  : "",
            fileName  : ""
        }

    }

    addCheckForDueDate(dueDate){
        switch(dueDate){
            case "Normal": return <img className="labslip-inner-element" style={{top:"300px",left:"7px"}} src="/images/newcase/form/check.png" alt="normal"/>;
            case "Rush" : return <img className="labslip-inner-element" style={{top:"300px",left:"75px"}} src="/images/newcase/form/check.png" alt="rush"/>;
            default: return null;
        }
    }

    render(){
        return (
            <div id="labslip">
                <div className="canvas-contents">
                    <img src={this.state.formImageSrc} alt="form"/>
                    <div className="labslip-inner-element" style={{"z-Index":2,top:"365px",left:"46px",height:"220px",width:"600px"}}>
                        <img id="appliance-onimg-u" src={this.props.appliance_types == null ? "" : "/images/appliance/"+ this.props.appliance_types.get("U") + ".png" } alt=""/>
                        <img id="appliance-onimg-l" src={this.props.appliance_types == null ? "" : "/images/appliance/"+ this.props.appliance_types.get("L") + ".png"} alt=""/>
                    </div>
                    <img className="labslip-inner-element" src={this.props.canvasHtmlDataURL} style={{"z-Index":2,top:"380px",left:"0px",height:"240px",width:"600px"}} alt=""/>
                    <p className="labslip-inner-element" style={{fontsize:"24px",top:"30px",left:"730px"}}> caseId </p>     {/* caseId */}
                    <h5><p className="labslip-inner-element" style={{fontsize:"18px",top:"120px",left:"140px"}}> doctor office </p></h5> {/*  doctor office */}
                    <p className="labslip-inner-element" style={{fontsize:"18px",top:"148px",left:"80px"}}> addr </p> {/* addr */}
                    <p className="labslip-inner-element" style={{fontsize:"18px",top:"178px",left:"55px"}}> city </p> {/* city */}
                    <p className="labslip-inner-element" style={{fontsize:"18px",top:"178px",left:"330px"}}> state </p> {/* caseId */}
                    <p className="labslip-inner-element" style={{fontsize:"18px",top:"178px",left:"485px"}}> zip </p> {/* caseId */}
                    <p className="labslip-inner-element" style={{fontsize:"18px",top:"209px",left:"70px"}}> phone </p> {/* caseId */}
                    <p className="labslip-inner-element" style={{fontsize:"15px",top:"214px",left:"340px"}}> email </p> {/* caseId */}
                    <p className="labslip-inner-element" style={{fontsize:"20px",top:"255px",left:"98px"}}> fist name </p> {/* caseId */}
                    <p className="labslip-inner-element" style={{fontsize:"20px",top:"255px",left:"383px"}}> last name </p> {/* caseId */}
                    <p className="labslip-inner-element" style={{fontsize:"22px",top:"315px",left:"225px"}}> date sent </p> {/* caseId */}
                    {
                        this.addCheckForDueDate(this.state.dueDate)
                    }
                    <p className="labslip-inner-element" style={{fontsize:"18px",top:"756px",left:"452px"}}> color </p>
                    <p className="labslip-inner-element" style={{fontsize:"18px",top:"729px",left:"455px"}}> pontic </p>
                    <p className="labslip-inner-element" style={{fontsize:"16px",top:"170px",left:"670px",width:"230px",letterSpacing:"1px"}}> note </p>
                </div>
            </div>
            
    )}
}

export default UrxGenerator;