import React from "react";
export const DragNDropContext = React.createContext();

export class DragNDropProvider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          item: null,
          droppedIn: null,
      };
    }

    dragStarted = (ev) => {
        console.log("Drag started")
        // ev.preventDefault();
        console.log(ev.target)
        this.setState({
            item: ev.target
        })
    }

    itemDropped = (ev) => {
        console.log("Item Dropped")
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        this.setState({
            droppedIn: ev.target
        })
        console.log(this.state.item)
        console.log("Dropped in")
        console.log(this.state.droppedIn)
    }
  
    render() {
      return (
        <DragNDropContext.Provider
          value={{
            state: this.state,
            dragStarted: this.dragStarted,
            itemDropped: this.itemDropped,
          }}
        >
          {this.props.children}
        </DragNDropContext.Provider>
      );
    }
  }