import React from "react";
import Canvas from "./subcomponents/Canvas/CakeCanvas"
import Pallet from "./subcomponents/CakePallet"

class CakeMaker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-3">
                    <Pallet />
                </div>
                <div className="col-md-9">
                    <Canvas />
                </div>
            </div>
        )
    }
}

export default CakeMaker