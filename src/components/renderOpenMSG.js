import React, { Component } from 'react'
import '../css/messanger.css';

class renderOpenMSG extends Component {

/*Todo:: Send Message Function here */
sendMSG = () => {

}
    
    render(){
        const { search } = this.props.location;	
        //console.log(search)        
        const case_id = search.charAt(search.length-1);
        //console.log(case_id) 

        return <div className="msg-contaner">
        <div className='msg-content'></div>
        <div className='msg-input'>
          <form action="" method="post">
            <textarea name='input-messenger' rows='5' cols='30'></textarea>
            <input type="textarea" name="messenger" hidden />
            <input type='text' id='msg_caseid' name='msg_caseid' defaultValue={case_id} hidden />
            <input type='submit' id='msg_submit' value='Send' onClick={this.sendMSG} />
          </form>
        </div>
      </div>
    }
}

export default renderOpenMSG;