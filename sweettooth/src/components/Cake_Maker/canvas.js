import React from "react";
import Cake_board from "./cake_board";
import { CakeContext } from "../DataProviders/CakeDataProvider";

class CakeCanvas extends React.Component {
    constructor(props) {
        super(props)
    }

    board2DArray = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]

    render() {
        return( 
            <CakeContext.Consumer>
                {
                    context => {
                        console.log(context.state.baseType)
                        return(<div id="canvas" className={context.state.baseFlavor == "Vanilla" ? "vanilla" : "chocolate"}>
                            {
                                this.board2DArray.map((value, indexRow) => {
                                    return (
                                        <div className="row boardRow">
                                            {
                                                value.map((square) => {
                                                    return <Cake_board row={indexRow} column={square}/>
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>)
                    }
                }
            </CakeContext.Consumer>
        )
    }
}

export default CakeCanvas
