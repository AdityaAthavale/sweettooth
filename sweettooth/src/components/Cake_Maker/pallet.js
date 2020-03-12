import React from "react";
import Pallet_component from "./pallet_component";

class pallet extends React.Component {
    palletItems = ["Apple", "Fondant Flower", "Rose flower", "Pineapple", "Orange", "Strawberry"]
    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false
        }
    }

    render() {
        return(
            <div>
                {
                    this.palletItems.map((item)=>{
                        return(<Pallet_component title={item}/>)
                    })
                }
            </div>
        )
    }
}

export default pallet
