import React from "react";
import API from './../../API'
export const CakeContext = React.createContext();

export class CakeDataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occassion: "",
      baseType: "",
      baseFlavor: "",
      decorationType: "",
      decorationFlavor: "",
      baseImage: "",
      email: "",
      password: "",
      userDrawing: "",
      deliveryDate: Date()
    };
  }

  handleDateChange = event => {
    // let value = event.target.value;
    // const name = event.target.name;
    // let dt = Date(value)
    // console.log(dt)
    // if(dt !== null) {
    //   debugger;
    //   this.setState({
    //     [name]: value
    //   })
    // }
  }
  
  handleInputChange = event => {
    // update state
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  

  handleLoginAndSubmit = (drawing, event) => {
    console.log("This is drawing", drawing)
    this.setState({
      userDrawing: drawing
    })
    API.login(this.state.email, this.state.password).then((data) => {
      this.submitCake()
    }).catch((err) => {
        console.log(err)
    })
  }

  submitCake() {
    API.submitCake(this.state).then((data) => {
      console.log("cake saved......")
      window.location = "/"
    }).catch((err) => {
      alert("Something went wrong when placing order.")
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
    const name = e.target.name;
    this.setState({
      [name] : e.target.value
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
          handleLoginAndSubmit: this.handleLoginAndSubmit,
          handleDateChange: this.handleDateChange
        }}
      >
        {this.props.children}
      </CakeContext.Provider>
    );
  }
}