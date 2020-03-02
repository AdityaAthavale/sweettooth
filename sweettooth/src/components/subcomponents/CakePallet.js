import React from "react";
import { Draggable } from 'react-drag-and-drop'

class CakePallet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false
        }
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    render() {
        return(
            <div draggable="true" onDragStart={(e)=> this.drag(e)}>
                This is Pallet
            </div>
        )
    }
}

export default CakePallet
