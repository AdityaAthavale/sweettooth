import React from "react";
import { CakeContext } from "./../DataProviders/CakeDataProvider";
import HtmlForm from "./HtmlForm";
import "./forms.css"

export default class BasicCakeDetails extends React.Component {
  render() {
        return (
            <CakeContext.Consumer>
            {
                context => {
                    return(
                        <div className="container formBackground">
                            <h2 className="formHeader">Lets get some basic details: </h2>
                            { <HtmlForm context={context} /> }
                        </div>
                    )
                }
            }
            </CakeContext.Consumer>
        );
  }
}

// <CakeDataProvider.Consumer>
//             {
//                 context => {
// }
// }
// </CakeDataProvider.Consumer>
// );