import React from "react";
import { DragNDropContext } from "../DataProviders/DragNDropDataProvider";

class pallet_component extends React.Component {
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
            <DragNDropContext.Consumer>
                {
                    context => {
                        return(
                            <div draggable="true" onDragStart={(e) => {context.dragStarted(e)}}>
                                This is Pallet
                            </div>
                        )
                    }
                }   
            </DragNDropContext.Consumer>
           
        )
    }
}

export default pallet_component