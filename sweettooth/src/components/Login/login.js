import React from "react";
import Input from "./../Forms/Input";
import {CakeContext } from "./../DataProviders/CakeDataProvider";
import { DragNDropContext } from "../DataProviders/DragNDropDataProvider";

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
                                            <button className="btn btn-success centered" type="submit" onClick={e => cakeContext.handleLoginAndSubmit(e, dragAndDropContext.state.status)}>
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