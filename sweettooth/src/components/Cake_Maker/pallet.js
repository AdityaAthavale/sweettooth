import React from "react";
import Pallet_component from "./pallet_component";

class pallet extends React.Component {
    palletItems = ["Strawberry", "Pineapple", "Rose flower", "Fondant Flower"]
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
