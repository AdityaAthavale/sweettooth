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
                    value={props.context.state.occassion}
                    onChange={e => props.context.handleInputChange(e)}
                    name="occassion"
                    type="text"
                    />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-4">
                    <label>Delivery date:</label>
                </div>
                <div className="col-md-8">
                    <Input
                    value={props.context.state.occassion}
                    onChange={e => props.context.handleDateChange(e)}
                    name="deliveryDate"
                    type="date"
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
                    name="baseType"
                    value={props.context.state.baseType}
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
                    name="baseFlavor"
                    value={props.context.state.baseFlavor}
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
                name="decorationType"
                value={props.context.state.decorationType}
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
                    <label>Decoration flavour (Royal Icing only):</label>
                </div>
                <div className="col-md-8">
                    <Select
                    onChange={e => props.context.handleSelectChange(e)}
                    name="decorationFlavor"
                    value={props.context.state.decorationFlavor}
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