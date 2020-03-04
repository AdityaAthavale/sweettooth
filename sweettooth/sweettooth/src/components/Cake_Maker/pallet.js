import React from "react";
import Pallet_component from "./pallet_component";

class pallet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false
        }
    }

    render() {
        return(
            <div>
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
                <Pallet_component />
            </div>
        )
    }
}

export default pallet
