import React, { Component } from 'react';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import html2canvas from 'html2canvas';
class UrxGenerator extends Component {
  constructor(props) {
    super(props);
    // alert(props);
    console.log(props);
    debugger;
    this.completeCaseImage = null;
    this.divRef = React.createRef();
    this.state = {
      formImageSrc: '/images/newcase/form/form.png',
      caseId: '',
      doctorOfficeName: '',
      addr: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: '',
      patientFirstName: '',
      patientLastName: '',
      deliveryType: '',
      dueDate: "",
      color: '',
      appliance_types: new Map(),
      drawingData: '',
      ballClasp: '',
      cClasp: '',
      adams: '',
      pontics: '',
      notes: '',
      imgName: '',
      fileName: '',
      ...props.casePersonalInfo,
      ...props.data
    };
  }

  addCheckForDueDate = (casePersonalInfo) => {
    if(casePersonalInfo == null) return;
    var del_type = casePersonalInfo.Normal == "Normal" ? casePersonalInfo.Normal : "";
    del_type = casePersonalInfo.Rush == "Rush" ? casePersonalInfo.Rush : del_type;
    
    switch (del_type) {
      case 'Normal':
        return (
          <img
            className="labslip-inner-element"
            style={{ top: '300px', left: '7px' }}
            src="/images/newcase/form/check.png"
            alt="normal"
          />
        );
      case 'Rush':
        return (
          <img
            className="labslip-inner-element"
            style={{ top: '300px', left: '75px' }}
            src="/images/newcase/form/check.png"
            alt="rush"
          />
        );
      default:
        return null;
    }
  };

  addCheckForBands_required= (bands_required) => {
    
    switch (bands_required) {
      case 'Normal':
        return (
          <img
            className="labslip-inner-element"
            style={{ top: '700px', left: '7px' }}
            src="/images/newcase/form/check.png"
            alt="normal"
          />
        );
      case 'Rush':
        return (
          <img
            className="labslip-inner-element"
            style={{ top: '700px', left: '75px' }}
            src="/images/newcase/form/check.png"
            alt="rush"
          />
        );
      default:
        return null;
    }
  };

  addCheckForpointicL = (pointicL) => {
    
    if(pointicL.includes("L")){
      return (
        <img
          className="labslip-inner-element"
          style={{ top: '730px', left: '335px' }}
          src="/images/newcase/form/check.png"
          alt="normal"
        />
      );
    }
  };

  addCheckForTextForPontic = (textForPontic) => {
    
      if(textForPontic.includes("Y")){
        return (
          <img
            className="labslip-inner-element"
            style={{ top: '700px', left: 'px' }}
            src="/images/newcase/form/check.png"
            alt="normal"
          />
        );
      }
  };

  addCheckForpointicU = (pointicU) => {
    
    if(pointicU.includes("U")){
      return (
        <img
          className="labslip-inner-element"
          style={{ top: '730px', left: '310px' }}
          src="/images/newcase/form/check.png"
          alt="normal"
        />
      );
    }
  };

  addCheckForadamsClaspL = (adamsClaspL) => {
    
    if(adamsClaspL.includes("L")){
      return (
        <img
          className="labslip-inner-element"
          style={{ top: '770px', left: '35px' }}
          src="/images/newcase/form/check.png"
          alt="normal"
        />
      );
    }
  };

  addCheckForadamsClaspU = (adamsClaspU) => {
    
    if(adamsClaspU.includes("U")){
      return (
        <img
          className="labslip-inner-element"
          style={{ top: '770px', left: '7px' }}
          src="/images/newcase/form/check.png"
          alt="normal"
        />
      );
    }
  };

  addCheckForballClaspL = (ballClaspL) => {
    
    if(ballClaspL.includes("L")){
      return (
        <img
          className="labslip-inner-element"
          style={{ top: '730px', left: '35px' }}
          src="/images/newcase/form/check.png"
          alt="normal"
        />
      );
    }
  };
  addCheckForballClaspU = (ballClaspU) => {
    
    if(ballClaspU.includes("U")){
      return (
        <img
          className="labslip-inner-element"
          style={{ top: '730px', left: '7px' }}
          src="/images/newcase/form/check.png"
          alt="normal"
        />
      );
    }
  };

  addCheckForCClaspL = (CClaspL) => {
    
    if(CClaspL.includes("L")){
      return (
        <img
          className="labslip-inner-element"
          style={{ top: '750px', left: '35px' }}
          src="/images/newcase/form/check.png"
          alt="normal"
        />
      );
    }
  };
  addCheckForCClaspU = (CClaspU) => {
    
    if(CClaspU.includes("U")){
      return (
        <img
          className="labslip-inner-element"
          style={{ top: '750px', left: '7px' }}
          src="/images/newcase/form/check.png"
          alt="normal"
        />
      );
    }
  };

  changeDateFormat = (date) =>{
    if(date == null || date == '') return ""; 
    var date_array = date.split("-");
    return  date_array[1] + '/' + date_array[2] + '/' + date_array[0];
  }

  componentDidMount(){
      if(this.props.casePersonalInfo == null){
        document.getElementById("previewSubmit").click();
      }
  }

  componentWillReceiveProps(props){
    debugger;
    alert("i came heeere atlast")
  }

  render() {
    debugger;
    // alert(this.props.casePersonalInfo.asdsd);
    
    return (
      <div
        id="labslip"
        className="canvas-contents"
        ref={this.props.forwardedRef}
      >
        <img src={this.state.formImageSrc} alt="form" />
        <div
          className="labslip-inner-element"
          style={{
            zIndex: 2,
            top: '365px',
            left: '46px',
            height: '220px',
            width: '600px',
          }}
        >
          <img
            id="appliance-onimg-u"
            src={
              this.props.appliance_types == null
                ? ''
                : '/images/appliance/' +
                  this.props.appliance_types.get('U') +
                  '.png'
            }
            alt=""
          />
          <img
            id="appliance-onimg-l"
            src={
              this.props.appliance_types == null
                ? ''
                : '/images/appliance/' +
                  this.props.appliance_types.get('L') +
                  '.png'
            }
            alt=""
          />
        </div>
        <img
          className="labslip-inner-element"
          src={this.props.canvasHtmlDataURL}
          style={{
            zIndex: 2,
            top: '380px',
            left: '0px',
            height: '240px',
            width: '600px',
          }}
          alt=""
        />
        <p
          className="labslip-inner-element"
          style={{ fontsize: '24px', top: '30px', left: '730px' }}
        >
          caseId
        </p>
        {/* caseId */}
        <h5>
          <p
            className="labslip-inner-element"
            style={{ fontsize: '18px', top: '120px', left: '140px' }}
          >
            {this.props.casePersonalInfo.doctor_office_name}
          </p>
        </h5>
        {/*  doctor office */}
        <p
          className="labslip-inner-element"
          style={{ fontsize: '18px', top: '148px', left: '80px' }}
        >
          {this.props.casePersonalInfo.city}
        </p>
        {/* addr */}
        <p
          className="labslip-inner-element"
          style={{ fontsize: '18px', top: '178px', left: '55px' }}
        >
          {this.props.casePersonalInfo.addr}
        </p>
        {/* city */}
        <p
          className="labslip-inner-element"
          style={{ fontsize: '18px', top: '178px', left: '330px' }}
        >
          {this.props.casePersonalInfo.state}
        </p>
        {/* caseId */}
        <p
          className="labslip-inner-element"
          style={{ fontsize: '18px', top: '178px', left: '485px' }}
        >
          {this.props.casePersonalInfo.zip}
        </p>
        {/* caseId */}
        <p
          className="labslip-inner-element"
          style={{ fontsize: '18px', top: '209px', left: '70px' }}
        >
          {this.props.casePersonalInfo.phone}
        </p>
        {/* caseId */}
        <p
          className="labslip-inner-element"
          style={{ fontsize: '15px', top: '214px', left: '340px' }}
        >
          {this.props.casePersonalInfo.email}
        </p>
        {/* caseId */}
        <p
          className="labslip-inner-element"
          style={{ fontsize: '20px', top: '255px', left: '98px' }}
        >
          {this.props.casePersonalInfo.patientFirstName}
        </p>
        {/* caseId */}
        <p
          className="labslip-inner-element"
          style={{ fontsize: '20px', top: '255px', left: '383px' }}
        >
          {this.props.casePersonalInfo.patientLastName}
        </p>
        {/* caseId */}
        <p
          className="labslip-inner-element"
          style={{ fontsize: '22px', top: '315px', left: '225px' }}
        >
          {this.state.doctor_office_name}
        </p>
        {/* caseId */}
        {this.addCheckForDueDate(this.props.casePersonalInfo)}
        
        <p
          className="labslip-inner-element"
          style={{ fontsize: '22px', top: '310px', left: '225px' }}
        >
          {new Date().toLocaleDateString()}
        </p>

        <p
          className="labslip-inner-element"
          style={{ fontsize: '22px', top: '650px', left: '55px' }}
        >
          {this.props.appliance_types == null
                ? '' : this.props.appliance_types.get("U")}
        </p>

        <p
          className="labslip-inner-element"
          style={{ fontsize: '22px', top: '680px', left: '55px' }}
        >
          {this.props.appliance_types == null
                ? '': this.props.appliance_types.get("L")}
        </p>

        <p
          className="labslip-inner-element"
          style={{ fontsize: '22px', top: '310px', left: '455px' }}
        >
          {this.changeDateFormat(this.props.casePersonalInfo.duedate)}
        </p>

        <p
          className="labslip-inner-element"
          style={{ fontsize: '18px', top: '756px', left: '452px' }}
        >
          {this.state.color}
        </p>
        <p
          className="labslip-inner-element"
          style={{ fontsize: '18px', top: '729px', left: '455px' }}
        >
          {this.state.pontics}
        </p>
        <p
          className="labslip-inner-element"
          style={{
            fontsize: '16px',
            top: '170px',
            left: '670px',
            maxWidth: '230px',
            letterSpacing: '1px',
          }}
        >
          {this.props.casePersonalInfo.notes}
        </p>
        {this.addCheckForBands_required(this.props.casePersonalInfo.bands_required)}
        {this.addCheckForpointicL(this.props.casePersonalInfo.pontics)};
        {this.addCheckForpointicU(this.props.casePersonalInfo.pontics)};
        {this.addCheckForTextForPontic(this.props.casePersonalInfo.pontics)};
        {this.addCheckForadamsClaspL(this.props.casePersonalInfo.adams)};
        {this.addCheckForadamsClaspU(this.props.casePersonalInfo.adams)};
        {this.addCheckForballClaspL(this.props.casePersonalInfo.ball_clasp)};
        {this.addCheckForballClaspU(this.props.casePersonalInfo.ball_clasp)};
        {this.addCheckForCClaspU(this.props.casePersonalInfo.c_clasp)};
        {this.addCheckForCClaspL(this.props.casePersonalInfo.c_clasp)};
      
        </div>
    );
  }
}

export default UrxGenerator;
