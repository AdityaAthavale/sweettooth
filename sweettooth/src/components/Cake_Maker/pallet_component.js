import React from "react";
import { DragNDropContext } from "../DataProviders/DragNDropDataProvider";

class pallet_component extends React.Component {
    imageName = ""
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <DragNDropContext.Consumer>
                {
                context => {
                        this.imageName = ("http://localhost:3001/images/" + this.props.title);
                        return(
                            <div className="row">
                                <div id={this.props.title} className="col-md-2" draggable="true" onDragStart={(e) => {context.dragStarted(e)}}>
                                    <img src={"http://localhost:3001/images/" + this.props.title} />
                                </div>
                                <div className="col-md-10">
                                    { this.props.title }
                                </div>
                            </div>
                        )
                    }
                }   
            </DragNDropContext.Consumer>
           
        )
    }
}

export default pallet_component