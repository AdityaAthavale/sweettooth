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
        droppedIn: ev.target,
        row: ev.target.getAttribute("row"),
        column: ev.target.getAttribute("column")
      }
      let arr = this.state.status
      arr.push(object)
      this.setState({
        status: arr
      })
      console.log("Item dropped")
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