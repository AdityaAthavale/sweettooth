import React from "react";
import Input from "./Input";
import Select from "./Select";
import { Link } from "react-router-dom";

export default function HtmlForm(props) {
    return(
        <form method="post">
            <div className="row form-group">
                <div className="col-md-4">
                    <label>Occassion:</label>
                </div>
                <div className="col-md-8">
                    <Input
                    value={props.context.state.cakeOccassion}
                    onChange={e => props.context.handleInputChange(e)}
                    name="cakeOccassion"
                    type="text"
                    />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-4">
                    <label>Base Type:</label>
                </div>
                <div className="col-md-8">
                    <Select
                    onChange={e => props.context.handleSelectChange(e)}
                    name="cakeBaseType"
                    value={props.context.state.cakeBaseType}
                    data={[
                        { value: "Square", name: "Square" },
                        { value: "Round", name: "Round" }
                    ]}
                    />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-4">
                    <label>Base Flavor:</label>
                </div>
                <div className="col-md-8">
                    <Select
                    onChange={e => props.context.handleSelectChange(e)}
                    name="cakeBaseFlavor"
                    value={props.context.state.cakeBaseFlavor}
                    data={[
                        { value: "Chocolate", name: "Chocolate" },
                        { value: "Vanilla", name: "Vanilla" }
                    ]}
                    />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-4">
                    <label>Decoration Type:</label>
                </div>
                <div className="col-md-8">
                <Select
                onChange={e => props.context.handleSelectChange(e)}
                name="cakeDecorationType"
                value={props.context.state.cakeDecorationType}
                data={[
                    { value: "Royal Cream", name: "RoyalCream" },
                    { value: "Fondent", name: "Fondent" },
                    { value: "None", name: "Fondent" }
                ]}
                />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-4">
                    <label>Decoration flavour (Applicable for Royal Icing only):</label>
                </div>
                <div className="col-md-8">
                    <Select
                    onChange={e => props.context.handleSelectChange(e)}
                    name="cakeDecorationFlavor"
                    value={props.context.state.cakeDecorationFlavor}
                    data={[
                        { value: "Orange", name: "Orange" },
                        { value: "Strawberry", name: "Strawberry" },
                        { value: "Pineapple", name: "Pineapple" },
                        { value: "Chocolate", name: "Chocolate" },
                        { value: "Coconut", name: "Cononut" },
                        { value: "Butterscotch", name: "ButterScotch" },
                        { value: "Red Velvet", name: "Red Velvet" },
                    ]}
                    />
                </div>
            </div>
            <div className="row form-group">
                <Link to="/cakeMaker" className="btn btn-success centered" onClick={e => props.context.handleFormSubmit(e)} type="submit">
                {/* <Link to="/cakeMaker" className="btn btn-success centered"> */}
                    Next
                </Link>
            </div>
        </form>
    )
}