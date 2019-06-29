import React, { Component } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import AddItem from "./Components/AddItem";
import uuid from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key: uuid(),
          todo: "My first to do for this app",
          complete: true,
          priority: "High"
        },
        {
          key: uuid(),
          todo: "My second to do for this app",
          complete: false,
          priority: "Medium"
        },
        {
          key: uuid(),
          todo: "My third to do for this app",
          complete: true,
          priority: "Low"
        },
        {
          key: uuid(),
          todo: "My fourth to do for this app",
          complete: false,
          priority: "High"
        },
        {
          key: uuid(),
          todo: "My fivth to do for this app",
          complete: true,
          priority: "High"
        }
      ]
    };
  }

  addNewItem = item => {
    console.log(item);
    this.setState({ list: [...this.state.list, item] });
  };

  markTodoDone = key => {
    console.log("received props from chaild" + key);
    let listClone = this.state.list;
    listClone.find(item => item.key === key).complete = true;
    this.setState({ list: listClone });
  };

  markTodoUnDone = key => {
    console.log("received props from chaild" + key);
    let listClone = this.state.list;
    listClone.find(item => item.key === key).complete = false;
    this.setState({ list: listClone });
  };

  render() {
    return (
      <div className="container">
        <h2>ToDo App</h2>
        <AddItem addNewItem={this.addNewItem} />
        <TodoList
          todoList={this.state.list}
          markTodoDone={this.markTodoDone}
          markTodoUnDone={this.markTodoUnDone}
        />
      </div>
    );
  }
}

export default App;
