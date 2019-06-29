import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSquare } from "@fortawesome/free-solid-svg-icons";
class CompletedItem extends Component {
  constructor(props) {
    super(props);
  }

  onClickMovetoTodo = () => {
    console.log(this.props.item.key);
    this.props.markTodoUnDone(this.props.item.key);
  };

  render() {
    return (
      <li className="list-group-item" key={this.props.item.key}>
        <div className="row">
          <span className="col-1 fa-layers fa-fw">
            <FontAwesomeIcon icon={faSquare} size="2x" color="green" />
            <FontAwesomeIcon
              icon={faCheck}
              size="2x"
              inverse
              transform="shrink-6"
              onClick={this.onClickMovetoTodo}
            />
          </span>

          <span className="col-9">{this.props.item.todo}</span>
          <span className="col-2">{this.props.item.priority}</span>
        </div>
      </li>
    );
  }
}

export default CompletedItem;
