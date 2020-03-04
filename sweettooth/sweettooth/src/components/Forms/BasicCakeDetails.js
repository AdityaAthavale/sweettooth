import React from "react";
import Input from "./Input";
import Select from "./Select";
import { CakeDataProvider } from "../DataProviders/CakeDataProvider";
export default class BasicCakeDetails extends React.Component {
  render() {
    return (
        <CakeDataProvider.Consumer>
            {
                context => {
                    return (
                        <div className="centered">
                            <h1>Lets get your cake stated:</h1>
                            <form method="post">
                                <div className="row form-group">
                                    <div className="col-md-4">
                                        <label>Occassion:{" "}</label>
                                    </div>
                                    <div className="col-md-8">
                                        <Input
                                        value={context.state.cakeOccassion}
                                        onChange={e => context.handleInputChange(e)}
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
                                        onChange={e => context.handleSelectChange(e)}
                                        name="cakeBaseType"
                                        value={context.state.cakeBaseType}
                                        data={[
                                            { value: "Square", name: "Square" },
                                            { value: "Round", name: "Round" }
                                        ]}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-4">
                                        <label>Base Flavor:{" "}</label>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                        onChange={e => context.handleSelectChange(e)}
                                        name="cakeBaseFlavor"
                                        value={context.state.cakeBaseFlavor}
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
                                    onChange={e => context.handleSelectChange(e)}
                                    name="cakeDecorationType"
                                    value={context.state.cakeDecorationType}
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
                                        <label>Decoration flavour (Applicable for Royal Icing only):{" "}</label>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                        onChange={e => context.handleSelectChange(e)}
                                        name="cakeDecorationFlavor"
                                        value={context.state.cakeDecorationFlavor}
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
                                    <button className="btn btn-success centered" onClick={e => context.handleFormSubmit(e)} type="submit">
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                    )
                }
            }
      </CakeDataProvider.Consumer>
    );
  }
}