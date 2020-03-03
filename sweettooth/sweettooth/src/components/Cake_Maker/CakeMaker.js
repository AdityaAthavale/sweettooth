import React from "react";
import cake_board from "./cake_board";

class CakeMaker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false
        }
    }

    render() {
        return(
            <div>
                <cake_board />
            </div>
        )
    }
}

export default CakeMaker