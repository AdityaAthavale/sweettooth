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

    allowDrop(ev, context) {
        ev.preventDefault();
        let contents = context.state.status.filter((value, index) => {
            return((value.row == this.props.row) && (value.column == this.props.column))
        })
        return (contents.length > 0 )
    }

    render() {
        return(
            <DragNDropContext.Consumer>
                {
                    context => {
                        let contents = context.state.status.filter((value, index) => {
                            return((value.row == this.props.row) && (value.column == this.props.column))
                        })
                        return(
                            <div row={this.props.row} column={this.props.column} className="square" onDrop={(event) => context.itemDropped(event)} onDragOver={(event) => this.allowDrop(event, context)}>
                                {
                                    contents.map((element) => {
                                        return (<img src={element.item} />)
                                    })
                                }
                            </div>
                        )
                    }
                }
            </DragNDropContext.Consumer>
        )
    }
}

export default cake_board