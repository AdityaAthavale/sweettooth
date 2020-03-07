import React from "react";
import Canvas from './canvas';
import Pallet from "./pallet";
import { DragNDropProvider, DragNDropContext } from "../DataProviders/DragNDropDataProvider";
import { CakeContext } from "../DataProviders/CakeDataProvider";
import { Link } from "react-router-dom";

class CakeMaker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false
        }
    }

    render() {
        return(
            <CakeContext.Consumer>
                {
                    context => {
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
                            <div className="row">
                                <Link to="/login" className="btn btn-success centered" onClick={e => context.saveJSON(e)} type="submit">
                                    Login
                                </Link>
                            </div>
                        </DragNDropProvider>
                        )
                    }
                }
                
            </CakeContext.Consumer>
        )
    }
}

export default CakeMaker