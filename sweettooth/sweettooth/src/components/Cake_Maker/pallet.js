import React from "react";
import Pallet_component from "./pallet_component";

class pallet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false
        }
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    render() {
        return(
            <Pallet_component />
        )
    }
}

export default pallet
