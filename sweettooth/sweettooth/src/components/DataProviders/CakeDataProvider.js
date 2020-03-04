import React from "react";
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
      };
    }

    handleInputChange = event => {
        // update state
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        debugger;
        console.log(this.state);
        this.setState({
          ...this.intialState
        });
      };
    
      handleSelectChange = e => {
        this.setState({
          usState: e.target.value
        });
      };

    render() {
      return (
        <CakeContext.Provider
          value={{
            state: this.state,
            handleInputChange: this.handleInputChange,
            handleFormSubmit: this.handleFormSubmit,
            handleSelectChange: this.handleSelectChange,
          }}
        >
          {this.props.children}
        </CakeContext.Provider>
      );
    }
  }