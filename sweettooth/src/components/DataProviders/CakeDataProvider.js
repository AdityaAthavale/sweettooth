import React from "react";
import API from './../../API'
export const CakeContext = React.createContext();

export class CakeDataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cakeOccassion: "",
      cakeBaseType: "",
      cakeBaseFlavor: "",
      cakeDecorationType: "",
      cakeDecorationFlavor: "",
      baseImage: "",
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    // update state
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  

  handleLoginAndSubmit = event => {
    event.preventDefault()
    API.login(this.state.email, this.state.password).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
  }

  saveJSON = event => {
  
    //Go back to initial page after submitting request.
  }

  handleFormSubmit = event => {

    console.log(this.state);
    this.setState({
      // ...this.intialState
    });
  }
  
  handleSelectChange = e => {
    this.setState({
      usState: e.target.value
    });
  }

  render() {
    return (
      <CakeContext.Provider
        value={{
          state: this.state,
          handleInputChange: this.handleInputChange,
          handleFormSubmit: this.handleFormSubmit,
          handleSelectChange: this.handleSelectChange,
          saveJSON: this.saveJSON,
          handleLoginAndSubmit: this.handleLoginAndSubmit
        }}
      >
        {this.props.children}
      </CakeContext.Provider>
    );
  }
}