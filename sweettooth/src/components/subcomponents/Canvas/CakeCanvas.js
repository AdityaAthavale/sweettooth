import React from "react";
import './../Canvas.css';
import CanvasComponent from "./CanvasComponent";

class CakeCanvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false,
            dropableContent: {}
        }
    }

    makeComponents() {
        let components = []
        let k = 0
        while(k<10) {
            components.push(new Array(10))
            k++;
        }
        for(let i = 0 ;i < 10; i++) {
            for(let j = 0 ;j < 10; j++) {
                components[i][j] = <CanvasComponent row={i} column={j} />
            }
        }
        return components
    }

    render() {
        let components = this.makeComponents()
        return(
            <div id="canvas">
                {
                components.map(function(row, index) {
                    return(<div className="row">
                        {
                            row.map(function (component, index) {
                                return(component)
                            })
                        }
                    </div>)
                    
                })}
            </div>
        )
    }
}

export default CakeCanvas
