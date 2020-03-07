import React from "react";
import './canvas.css';
import { DragNDropContext } from "../DataProviders/DragNDropDataProvider";

class cake_board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false,
            dropableContent: {}
        }
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    render() {
        return(
            <DragNDropContext.Consumer>
                {
                    context => {
                        return(
                            <div className="square" onDrop={(event) => context.itemDropped(event)} onDragOver={(event) => this.allowDrop(event)} />
                        )
                    }
                }
            </DragNDropContext.Consumer>
        )
    }
}

export default cake_board