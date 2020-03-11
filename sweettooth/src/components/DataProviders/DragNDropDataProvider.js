import React from "react";
export const DragNDropContext = React.createContext();

export class DragNDropProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        status: [],
        item: null,
        droppedIn: null,
    };
  }

  dragStarted = (ev) => {
      this.setState({
        item: ev.target.getAttribute("src")
      })
  }

  itemDropped = (ev) => {
      ev.preventDefault();
      let object = {
        item: this.state.item,
        row: ev.target.getAttribute("row"),
        column: ev.target.getAttribute("column")
      }
      let arr = this.state.status
      arr.push(object)
      console.log(arr)
      this.setState({
        status: arr
      })
  }

  render() {
    return (
      <DragNDropContext.Provider
        value={{
          state: this.state,
          dragStarted: this.dragStarted,
          itemDropped: this.itemDropped
        }}
      >
        {this.props.children}
      </DragNDropContext.Provider>
    );
  }
}