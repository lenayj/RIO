import React, { Component } from 'react';

import NewCasePersonalInfo from './newCasePersonalInfo';
import NewCasePrescription from './newCasePrescription';
import NewCaseOfficeInfo from './newCaseOfficeInfo';

import UrxGenerator from './urxGenerator';
import html2canvas from 'html2canvas';
import '../css/newCase.css';
import reactCanvasDraw from './react-canvas-draw';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import axios from 'axios';

var UrxGenRefForwarder = React.forwardRef((props, ref) => {
  return <UrxGenerator {...props} forwardedRef={ref} />;
});

class NewCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      canvasHtmlDataURL: '',
      imageSrc: null,
      stlFiles:[],
      data: {
        status: 'Submitted', //  submitted or processing or something..
        patient_first_name: '',
        patient_last_name: '',
        date_sent: "", // not req
        delivery_type: '', // normal or rush
        due_date: '',
        case_from: '', // stl files submitted portal name
        case_from_name: '', // filename submitted in the portal
        chart: 'firstdata', // not req
        acct: 'firstdata', // not req
        mailing_labels: 'fi', // not req
        shipping_boxes: 'fia', // not req
        prescription_sheets: 'fefe', // not req
        standard_hawley_retainer: 'f', // not req
        adams: '', 
        c_clasp: '',
        ball_clasp: '',
        circumferential_hawle_retainer: 'f', // not req
        hawley_flat_bow_retainer: 'f',// not req
        circumferential_flat_bow_retainer: 'f',// not req
        pouring: 'f', // not req
        pontics: '', // notes for ponitcs
        bands: 'firstdata', // not req
        color: 'firstdata', // design 
        notes: '', //special req
        doctor_office_name: '', 
        addr: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: 'venkatesh@uniortholab.com',
        messenger: '', // Doctor's messages
        img_name: '',
        file_name: '',
        stl_opened: 'firstdata', // not req
        reg_date: '', 
        license_id: '', 
        appliance_u: '', 
        appliance_l: 'firstdata',
        drawing_data: 'firstdata',// not required
        bands_required: 'firstdata', // select option
      },
      canvasData: {
        canvasDrawDataStack: null,
        canvasHtml: new reactCanvasDraw(),
        appliance_types: null,
      },
    };
    this.canvasHtml = new reactCanvasDraw();
    this.appliance_types = null;
    this.CasePersonalInfo = {};
    this.CaseOfficeInfo = {};
    this.completeCaseImage = null;
    this.labSlipRef = React.createRef();
  }

  componentDidMount(){
    axios.get("/myInformation",{
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjMwOTA4MTkyLCJpYXQiOjE2MzA2MDgxOTUsImVtYWlsIjoidmVua2F0ZXNoQHVuaW9ydGhvbGFiLmNvbSJ9.Iga7Wh5s_vaum0WmTEcIITL2rBl9YzSbzXhDRpJDkPQLYTJP7OzCkNO1vcyahoQw6Fm_m8itnNhZ884nqEY92g`
      }
    }).then((res)=> {
      var data_state = this.state.data;
      data_state.doctor_office_name = res.data.officeName;
      data_state.addr = res.data.street + " " + res.data.apartment;
      data_state.city =  res.data.city;
      data_state.state = res.data.state;
      data_state.zip = res.data.zipcode;
      data_state.phone = "needtobefixed"//res.data.phone;
      data_state.email = res.data.email;
      data_state.zip = res.data.zipcode;
      this.setState({data:data_state});
    },
    (rej)=> alert("rejected"))
    var date = new Date().toLocaleDateString();
    var a = date.split("/");
    var data_state = this.state.data;
    if(a[0].length==1) {a[0]="0"+a[0];}
    if(a[1].length==1) {a[1]="0"+a[1];}
    data_state.date_sent =  a[2]+"-"+a[0]+"-"+a[1];
    data_state.reg_date = a[2]+"/"+a[0]+"/"+a[1];
    this.setState({data:data_state});
    alert(this.state.data.date_sent);
  }

  returnCasePersonalInfo = (data) => {
    if (data == null) return;
    // alert(data);
    console.log(data);
    this.CasePersonalInfo = data;
    var htmlEleCanvas = null;
    var data_state = this.state.data;
    data_state.patient_first_name = this.CasePersonalInfo.patientFirstName;
    this.setState({data: data_state});
    data_state.patient_last_name = this.CasePersonalInfo.patientLastName;
    this.setState({data: data_state});
    data_state.due_date = this.CasePersonalInfo.duedate;
    this.setState({data: data_state});
    var del_type = this.CasePersonalInfo.Normal == "Normal" ? this.CasePersonalInfo.Normal : "";
    del_type = this.CasePersonalInfo.Rush == "Rush" ? this.CasePersonalInfo.Rush : del_type;
    data_state.delivery_type = del_type;
    this.setState({data: data_state});
    data_state.case_from = this.CasePersonalInfo.case_from;
    this.setState({data: data_state});
    data_state.case_from_name = this.CasePersonalInfo.case_from_name;
    // alert(data_state.case_from_name);
    
     // normal or rush
    this.setState({data: data_state});

    htmlEleCanvas = <UrxGenRefForwarder
    canvasDrawDataStack={this.state.canvasData.canvasDrawDataStack}
    canvasHtmlDataURL={this.state.canvasHtmlDataURL}
    appliance_types={this.state.canvasData.appliance_types}
    getCompleteCaseImage={this.getCompleteCaseImage}
    casePersonalInfo={this.CasePersonalInfo//,this.state.data.bands_required,
      // this.state.data.pointicL,
      // this.state.data.pointicU,
      // this.state.data.adamsClaspL,
      // this.state.data.adamsClaspU,
      // this.state.data.CClaspL,
      // this.state.data.CClaspU,
      // this.state.data.ballClaspL,
      // this.state.data.ballClaspU,
      // this.state.data.textForPontic
      // ,this.state.data
      }
    ref={this.labSlipRef}
    
    />
    return htmlEleCanvas;
  };

  returnsubmit = (canvasDrawDataStack, canvasHtml, appliance_types, stlFiles, bands_required,
    pointicL,
    pointicU,
    adamsClaspL,
    adamsClaspU,
    CClaspL,
    CClaspU,
    ballClaspL,
    ballClaspU,
    textForPontic,
    textForNotes) => {
    var data_state = this.state.data;
    console.log(canvasDrawDataStack);
    console.log(canvasHtml);
    console.log(appliance_types);
    console.log(bands_required);
    console.log(pointicL);
    console.log(pointicU);
    console.log(adamsClaspL);
    console.log(adamsClaspU);
    console.log(CClaspL);
    console.log(CClaspU);
    console.log(ballClaspL);
    console.log(ballClaspU);
    console.log(textForPontic);
    debugger;
    var data_state = this.state.data;
    this.setState({
      canvasData: { canvasDrawDataStack, canvasHtml, appliance_types},
    });
    if(appliance_types.size >0){
        this.setState({appliance_u:appliance_types.get("U")});
        this.setState({appliance_l:appliance_types.get("L")});
    }
    if(stlFiles.length>0){
      this.setState({stlFiles:stlFiles});
    }
    if(textForNotes.length >0){
      data_state.notes = textForNotes;
      this.setState({data:data_state});
    }
    if(bands_required.length > 0){
      data_state.bands_required = bands_required;
      this.setState({data:data_state});
    }
    if(pointicL.length > 0 && !data_state.pontics.includes("Pontic_L")){
      data_state.pontics += "L";
      this.setState({data:data_state});
    }
    if(pointicU.length > 0 && !data_state.pontics.includes("Pontic_U")){
      data_state.pontics += "U";
      this.setState({data:data_state});
    }
    if(adamsClaspL.length > 0 && !data_state.adams.includes("Adams_Clasp_L")){
      if( data_state.adams.includes("L")){
        data_state.adams.replace('L', '');
      }
      else{
        data_state.adams += "L";
      }
      this.setState({data:data_state});
    }
    if(adamsClaspU.length > 0 && !data_state.adams.includes("Adams_Clasp_U") ){
      if( data_state.adams.includes("U")){
        data_state.adams.replace('U', '');
      }
      else{
        data_state.adams += "U";
      }
      this.setState({data:data_state});
    }
    if(CClaspL.length > 0 && !data_state.c_clasp.includes("C_Clasp_L")){
      if( data_state.c_clasp.includes("L")){
        data_state.c_clasp.replace('L', '');
      }
      else{
        data_state.c_clasp += "L";
      }
      this.setState({data:data_state});
    }
    if(CClaspU.length > 0 && !data_state.c_clasp.includes("C_Clasp_U")){
      if( data_state.c_clasp.includes("U")){
        data_state.c_clasp.replace('U', '');
      }
      else{
        data_state.c_clasp += "U";
      }
      this.setState({data:data_state});
    }
    if(ballClaspL.length > 0 && !data_state.ball_clasp.includes("Ball_Clasp_L")){
      if( data_state.ball_clasp.includes("L")){
        data_state.ball_clasp.replace('L', '');
      }
      else{
        data_state.ball_clasp += "L";
      }
      this.setState({data:data_state});
    }
    if(ballClaspU.length > 0 && !data_state.ball_clasp.includes("Ball_Clasp_U")){
      if( data_state.ball_clasp.includes("U")){
        data_state.ball_clasp.replace('U', '');
      }
      else{
        data_state.ball_clasp += "U";
      }
      this.setState({data:data_state});
    }
    console.log(this.state.data);
    var htmlEleCanvas = <UrxGenRefForwarder
    canvasDrawDataStack={this.state.canvasData.canvasDrawDataStack}
    canvasHtmlDataURL={this.state.canvasHtmlDataURL}
    appliance_types={this.state.canvasData.appliance_types}
    getCompleteCaseImage={this.getCompleteCaseImage}
    secondHalfInfo={//this.CasePersonalInfo//,this.state.data.bands_required,
      // this.state.data.pointicL,
      // this.state.data.pointicU,
      // this.state.data.adamsClaspL,
      // this.state.data.adamsClaspU,
      // this.state.data.CClaspL,
      // this.state.data.CClaspU,
      // this.state.data.ballClaspL,
      // this.state.data.ballClaspU,
      // this.state.data.textForPontic
      this.state.data
      }
    ref={this.labSlipRef}
    
    />
    var a = this.labSlipRef.current;
    return htmlEleCanvas;
    debugger;
  };

  submitPrescription = async (e) => {
    e.preventDefault();
    debugger;

    this.setState((prevState) => ({
      canvasHtmlDataURL:
        this.state.canvasData.canvasHtml?.ctx?.drawing?.canvas?.toDataURL(),
      data: {
        ...prevState.data,
        ...this.CaseOfficeInfo,
        ...this.CasePersonalInfo
      },
    }));

    this.setState((prevState) => ({
      canvasHtmlDataURL:
        this.state.canvasData.canvasHtml?.ctx?.drawing?.canvas?.toDataURL(),
      data: {
        ...prevState.data,
        ...this.CaseOfficeInfo,
        ...this.CasePersonalInfo
      },
    }));

    if (this.labSlipRef.current === null || this.CasePersonalInfo == null) {
      return;
    }
    var dataUrl = null;
    try {
      dataUrl = await toPng(this.labSlipRef.current);

      console.log({ dataUrl });

      this.setState({ imageSrc: dataUrl });
    } catch (error) {
      console.log({ error });
    }

    var del_type = this.CasePersonalInfo.Normal == "Normal" ? this.CasePersonalInfo.Normal : "";
    del_type = this.CasePersonalInfo.Rush == "Rush" ? this.CasePersonalInfo.Rush : del_type;
    var data_state = this.state.data;
    data_state.delivery_type = del_type;
    this.setState({data:data_state});

    this.setState((prevState) => ({
      canvasHtmlDataURL:
        this.state.canvasData.canvasHtml?.ctx?.drawing?.canvas?.toDataURL(),
      data: {
        ...prevState.data,
        ...this.CaseOfficeInfo,
        ...this.CasePersonalInfo
      },
    }));

    axios.post("/api/user/set_prescription",this.state.data).then((res)=>{
        debugger;
        console.log(res.data)
        // this.completeCaseImage =  new Image();
        // this.completeCaseImage.src = "/images/newcase/form/form.png";
        var formData = new FormData();
        // var file = new Blob([
        // JSON.stringify({})
        // ], { type: 'application/json' });
        
        var file = this.dataURItoBlob (this.state.imageSrc);
        file.lastModifiedDate = new Date()
        file.name = "fileName" + "sdsd";
        formData.append('file', file);
        formData.append('caseId', res.data.case_id);
        this.setState({case_id:res.data.case_id});

        axios.post("/api/user/uploadCaseImage", formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
            })
                .then(res => {
                console.log(res.data);
                })
                .catch(err => console.log(err));
                
                this.uploadSTLFiles(this.state.stlFiles,res.data.case_id);
    },(rej)=>{
        alert(rej);
        alert("let see ehat happend");
    }).catch(err => {alert(err.data)});
  }

  returnCaseOfficeInfo = (data) => {
    this.CaseOfficeInfo = data;
    console.log(data);
  };

  getCompleteCaseImage = (completeCaseImage) => {
    this.completeCaseImage = completeCaseImage;
  }; 

  dataURItoBlob = (dataURI) => {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: mimeString});
}

  uploadSTLFiles( stlFiles, case_id ){
    if(stlFiles.length > 0){
      debugger;
      var formData =  new FormData();
      stlFiles.forEach(file=>{
        formData.append("stlFiles", file);
      });
      formData.append("caseId", case_id);
      // formData.append("caseIdRandom","caseIdRandom");
      axios.post("/uploadStlFiles",formData).then((res)=> alert("uploaded"),(rej)=> alert("rejected"))
    } 
                           
  }

  render() {
    // alert(this.CasePersonalInfo);
    console.log(this.CasePersonalInfo);

    var htmlEleCanvas = null;
    
        htmlEleCanvas = <UrxGenRefForwarder
        canvasDrawDataStack={this.state.canvasData.canvasDrawDataStack}
        canvasHtmlDataURL={this.state.canvasHtmlDataURL}
        appliance_types={this.state.canvasData.appliance_types}
        getCompleteCaseImage={this.getCompleteCaseImage}
        casePersonalInfo={//this.CasePersonalInfo//,this.state.data.bands_required,
          // this.state.data.pointicL,
          // this.state.data.pointicU,
          // this.state.data.adamsClaspL,
          // this.state.data.adamsClaspU,
          // this.state.data.CClaspL,
          // this.state.data.CClaspU,
          // this.state.data.ballClaspL,
          // this.state.data.ballClaspU,
          // this.state.data.textForPontic
          this.state.data
          }
        ref={this.labSlipRef}
        
      />
     
    console.log(this.labSlipRef.current);
    
    
    return (
      <div className="dashboard-bg-color">
        <div className="container newCase">
          <div className="newCase-banner text-left mb-4 mt-4">
            <h1 className="title-wording">New Case</h1>
          </div>

          <div className="newCase-form">
            <form>
              <NewCasePersonalInfo
                casePersonalInfo={this.returnCasePersonalInfo}
              />
              <NewCasePrescription submitted={this.returnsubmit} />
              <NewCaseOfficeInfo caseOfficeInfo={this.returnCaseOfficeInfo} />
            </form>
          </div>
          {htmlEleCanvas}
          <div className="newCase-submitBtn pt-5 pb-5">
            <button
              id="previewSubmit"
              type="button"
              className="btn btn-primary btn-lg btn-block"
              onClick={this.submitPrescription}
            >
              Submit
            </button>
          </div>

          <hr />

          {this.state.imageSrc && <img src={this.state.imageSrc} alt="test" />}
        </div>
      </div>
    );
  }
}

export default NewCase;
