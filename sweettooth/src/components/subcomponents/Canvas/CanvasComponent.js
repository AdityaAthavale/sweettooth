import React from "react";
import './Canvas.css';

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false,
            dropableContent: {}
        }
    }

    onDrop = (data) => {
        console.log(data)
        // => banana 
    }

    drop(ev) {
        console.log("On drop called")
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log(ev.target)
    }
    allowDrop(ev) {
        ev.preventDefault();
    }

    render() {
        return(
            <div id="canvas" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>
                <img className="base" alt=""/>
            </div>
        )
    }
}

export default CanvasComponent