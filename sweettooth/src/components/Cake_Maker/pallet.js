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
                    this.palletItems.map((item, index)=>{
                        return(<Pallet_component key={index} title={item}/>)
                    })
                }
            </div>
        )
    }
}

export default pallet
