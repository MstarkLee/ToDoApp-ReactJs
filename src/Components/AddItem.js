import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

class AddItem extends Component {
  state = {
    item: {}
  };

  componentDidMount() {
    this.refs.todo.focus();
  }

  handleInputChange = e => {
    // this.setState({ todo: e.target.value, key: uuid() });
    var d = e.target.value;
    var k = uuid();
    this.setState(prevState => {
      let item = Object.assign({}, prevState.item); // creating copy of state variable item
      item.todo = d;
      item.key = k; // update the name property, assign a new value
      item.complete = false;
      item.priority = "High";
      return { item }; // return new object jasper object
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.item);
    console.log(this.props.addNewItem);
    this.setState({ item: { todo: "", key: "" } });
    this.refs.form.reset();
  };

  render() {
    return (
      <form ref="form" onSubmit={this.onFormSubmit}>
        <textarea
          type="text"
          className="form-control"
          name="todo"
          ref="todo"
          placeholder="Add your note"
          onChange={this.handleInputChange}
        />

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    );
  }
}

// PropTypes
AddItem.propTypes = {
  addNewItem: PropTypes.func.isRequired
};
export default AddItem;
