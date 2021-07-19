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

const UrxGenRefForwarder = React.forwardRef((props, ref) => {
  return <UrxGenerator {...props} forwardedRef={ref} />;
});

class NewCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      canvasHtmlDataURL: '',
      imageSrc: null,
      data: {
        status: 'prep',
        patient_first_name: 'third',
        patient_last_name: 'firstdata',
        date_sent: '2021-03-31',
        delivery_type: 'firstdata',
        due_date: '2021-03-30',
        case_from: 'firstdata',
        case_from_name: 'firstdata',
        chart: 'firstdata',
        acct: 'firstdata',
        mailing_labels: 'fi',
        shipping_boxes: 'fia',
        prescription_sheets: 'fefe',
        standard_hawley_retainer: 'f',
        adams: 'fi',
        c_clasp: 'fira',
        ball_clasp: 'fa',
        circumferential_hawle_retainer: 'f',
        hawley_flat_bow_retainer: 'f',
        circumferential_flat_bow_retainer: 'f',
        pouring: 'f',
        pontics: 'firstdata',
        bands: 'firstdata',
        color: 'firstdata',
        notes: 'firstdata',
        doctor_office_name: 'firstdata',
        addr: 'firstdata',
        city: 'firstdata',
        state: 'firstdata',
        zip: 'firstdata',
        phone: 'firstdata',
        email: 'venkatesh@uniortholab.com',
        messenger: 'firstdata',
        img_name: 'firstdata',
        file_name: 'firstdata',
        stl_opened: 'firstdata',
        reg_date: '2021-03-30',
        license_id: 'firstdata',
        appliance_u: 'firstdata',
        appliance_l: 'firstdata',
        drawing_data: 'firstdata',
        bands_required: 'firstdata',
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

  returnCasePersonalInfo = (data) => {
    if (data == null) return;
    this.CasePersonalInfo = data;
  };

  returnsubmit = (canvasDrawDataStack, canvasHtml, appliance_types) => {
    this.setState({
      canvasData: { canvasDrawDataStack, canvasHtml, appliance_types },
    });
  };

  returnCaseOfficeInfo = (data) => {
    this.CaseOfficeInfo = data;
    console.log(data);
  };

  getCompleteCaseImage = (completeCaseImage) => {
    this.completeCaseImage = completeCaseImage;
  };

  render() {
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
          <UrxGenRefForwarder
            canvasDrawDataStack={this.state.canvasData.canvasDrawDataStack}
            canvasHtmlDataURL={this.state.canvasHtmlDataURL}
            appliance_types={this.state.canvasData.appliance_types}
            getCompleteCaseImage={this.getCompleteCaseImage}
            ref={this.labSlipRef}
          />
          <div className="newCase-submitBtn pt-5 pb-5">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              onClick={async (e) => {
                e.preventDefault();

                this.setState((prevState) => ({
                  canvasHtmlDataURL:
                    this.state.canvasData.canvasHtml?.ctx?.drawing?.canvas?.toDataURL(),
                  data: {
                    ...prevState.data,
                    ...this.CaseOfficeInfo,
                    ...this.CasePersonalInfo,
                  },
                }));

                if (this.labSlipRef.current === null) {
                  return;
                }

                try {
                  const dataUrl = await toPng(this.labSlipRef.current);

                  console.log({ dataUrl });

                  this.setState({ imageSrc: dataUrl });
                } catch (error) {
                  console.log({ error });
                }

                // axios.post("/api/user/set_prescription",this.state.data).then((res)=>{
                //     alert(res);
                //
                //     this.completeCaseImage =  new Image();
                //     this.completeCaseImage.src = "/images/newcase/form/form.png";
                //     var formData = new FormData();
                //     var file = new Blob([
                //     JSON.stringify({})
                //     ], { type: 'application/json' });
                //     formData.append('somename', file);

                //     axios.post("/api/user/uploadCaseImage", formData, {
                //         headers: {
                //             'content-type': 'multipart/form-data'
                //         }
                //         })
                //             .then(res => {
                //             console.log(res.data);
                //             })
                //             .catch(err => console.log(err));

                //     // axios.post("/api/user/uploadCaseImage",{"file" : this.completeCaseImage, "emailId": res.data.email}).then((res)=> alert("uploaded"),(rej)=> alert("rejected"));
                // },(rej)=>{
                //     alert(rej);
                //     alert("let see ehat happend");
                // });
              }}
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
