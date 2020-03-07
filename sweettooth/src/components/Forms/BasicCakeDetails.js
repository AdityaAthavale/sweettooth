import React from "react";
import { CakeDataProvider, CakeContext } from "./../DataProviders/CakeDataProvider";
import { DragNDropContext } from "./../DataProviders/DragNDropDataProvider";
import HtmlForm from "./HtmlForm";

export default class BasicCakeDetails extends React.Component {
  render() {
        return (
            <CakeContext.Consumer>
            {
                context => {
                    return(
                        <div className="centered">
                            <h1>Lets get your cake stated:</h1>
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