import React from "react";
import Input from "./../Forms/Input";
import {CakeContext } from "./../DataProviders/CakeDataProvider";

export default class LoginForm extends React.Component {
    render() {
        return(
            <CakeContext.Consumer>
            {
                context => {
                    return(<form method="post">
                        <div className="row form-group">
                            <div className="col-md-4">
                                <label>Email:</label>
                            </div>
                            <div className="col-md-8">
                                <Input
                                value={context.state.email}
                                onChange={e => context.handleInputChange(e)}
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
                                value={context.state.password}
                                onChange={e => context.handleInputChange(e)}
                                name="password"
                                type="password"
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <button className="btn btn-success centered" type="submit" onClick={e => context.handleLoginAndSubmit(e)}>
                                Login
                            </button>
                        </div>
                    </form>)
                }
            }
            </CakeContext.Consumer>
            );
        }
    }