import React from "react";
import Cake_board from "./cake_board";

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
            <div id="canvas">
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
            </div>
        )
    }
}

export default CakeCanvas
