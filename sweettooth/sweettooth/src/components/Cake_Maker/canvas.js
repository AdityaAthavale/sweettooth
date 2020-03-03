import React from "react";
import './Canvas.css';

class CakeCanvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false,
            dropableContent: {}
        }
    }
    render() {
        return(
            <div id="canvas">
            </div>
        )
    }
}

export default CakeCanvas
