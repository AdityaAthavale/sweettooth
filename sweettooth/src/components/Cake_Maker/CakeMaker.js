import React from "react";
import Canvas from './canvas';
import Pallet from "./pallet";
import { DragNDropProvider } from "../DataProviders/DragNDropDataProvider";

class CakeMaker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false
        }
    }

    render() {
        return(
            <DragNDropProvider>
                <div className="row">
                    <div className="col-md-4">
                        <Pallet />
                    </div>
                    <div className="col-md-4">
                        <Canvas />
                    </div>
                </div>
            </DragNDropProvider>
        )
    }
}

export default CakeMaker