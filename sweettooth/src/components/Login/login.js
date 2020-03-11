import React from "react";
import Input from "./../Forms/Input";
import {CakeContext } from "./../DataProviders/CakeDataProvider";
import { DragNDropContext, DragNDropProvider } from "../DataProviders/DragNDropDataProvider";

export default class LoginForm extends React.Component {
    render() {
        return(
            <CakeContext.Consumer>
            {
                cakeContext => {
                    return(
                        <DragNDropContext.Consumer>
                        {
                            dragAndDropContext => {
                                console.log("This is current status array In login form:" ,dragAndDropContext.state.status)
                                return(
                                <div className="container">
                                    <form method="post">
                                        <div className="row form-group">
                                            <div className="col-md-4">
                                                <label>Email:</label>
                                            </div>
                                            <div className="col-md-8">
                                                <Input
                                                value={cakeContext.state.email}
                                                onChange={e => cakeContext.handleInputChange(e)}
                                                name="email"
                                                type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-4">
                                                <label>Password:</label>
                                            </div>
                                            <div className="col-md-8">
                                                <Input
                                                value={cakeContext.state.password}
                                                onChange={e => cakeContext.handleInputChange(e)}
                                                name="password"
                                                type="password"
                                                />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            {console.log('3', dragAndDropContext)}
                                            <button className="btn btn-success centered" type="button" onClick={e => cakeContext.handleLoginAndSubmit(dragAndDropContext.state.status, e)}>
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                )
                            }
                        }
                        </DragNDropContext.Consumer>
                    )
                }
            }
            </CakeContext.Consumer>
            );
        }
    }