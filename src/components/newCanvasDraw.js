import React, { Component , useState } from 'react';
class NewCanvasDraw extends Component {
    constructor(props){
        super(props);
        this.canvasImageSrc = "",
        this.canvasImage=null
    }

    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 109, 100);
    }


    getCanvasImage(){
        return this.canvasImage;
    }

    render(){
        return (
            <div id="canvas">
	            <div class="drawing-canvas">
                    <canvas id="drawing"></canvas>
                </div>
	            <div class="appliance-image">
                    <img src="" id="appliance-img-u"/>
                    <img src="" id="appliance-img-l"/>
                </div>
	             <input type="text" name="inp-drawing" id="inp-drawing" hidden/>
	         </div>
        );
    }

}

export default NewCanvasDraw;