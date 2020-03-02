import React from "react";
import logo from './../../logo.svg';

class LoadingIndicator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isCancelled: false
        }
    }

    cancelUpload = () => {
        this.setState({
            isCancelled: true
        })
        if(this.props.cancelAction != null) {
            this.props.cancelAction()
        }
    }

    render() {
        if(this.state.isCancelled) {
            return(
                <div>
                    <p className="centered">{this.props.cancelledMessage ?? "Operation cancelled"}</p>
                </div>
            )
        }
        return (
            <div>
                <img id="loadingImage" src={logo} className="App-logo myRow" alt="logo" />
                <button className="btn btn-danger myRow" onClick={this.cancelUpload}>{this.props.cancelTitle ?? "Cancel"}</button>
            </div>
        )
    }
}

export default LoadingIndicator;