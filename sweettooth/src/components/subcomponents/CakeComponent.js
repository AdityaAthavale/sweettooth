import React from "react";
import { DragSource } from 'react-dnd'

class CakeComponent extends React.Component {
    component = [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.KNIGHT },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false
        }
    }

    render() {
        return(
            <div>
               This is cake component.
            </div>
        )
    }
}

export default CakePallet