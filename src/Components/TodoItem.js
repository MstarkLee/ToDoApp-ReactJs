import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSquare } from "@fortawesome/free-solid-svg-icons";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  onClickComplete = () => {
    console.log(this.props.item.key);
    this.props.markTodoDone(this.props.item.key);
  };
  render() {
    return (
      <li className="list-group-item" key={this.props.item.key}>
        <div className="row">
          <span className="col-1 fa-layers fa-fw">
            <FontAwesomeIcon
              icon={faSquare}
              size="2x"
              onClick={this.onClickComplete}
              color="green"
            />
          </span>

          <span className="col-9">{this.props.item.todo}</span>
          <span className="col-2">{this.props.item.priority}</span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
