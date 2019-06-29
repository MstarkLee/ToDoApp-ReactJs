import React, { Component } from "react";
import TodoItem from "./TodoItem";
import CompletedItem from "./CompletedItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <h3>ToDo List</h3>
          <ul className="list-group">
            {this.props.todoList
              .filter(item => {
                return item.complete === false;
              })
              .map(item => (
                <TodoItem item={item} markTodoDone={this.props.markTodoDone} />
              ))}
          </ul>
        </div>
        <div>
          <h3>Completed</h3>
          <ul className="list-group">
            {this.props.todoList
              .filter(item => {
                return item.complete === true;
              })
              .map(item => (
                <CompletedItem
                  item={item}
                  markTodoUnDone={this.props.markTodoUnDone}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;

// const TodoList = props => {
//   return (
//     <div>
//       <div>
//         <h3>ToDo List</h3>
//         <ul className="list-group">
//           {props.todoList
//             .filter(item => {
//               return item.complete === false;
//             })
//             .map(item => (
//               <TodoItem item={item} />
//             ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Completed</h3>
//         <ul className="list-group">
//           {props.todoList
//             .filter(item => {
//               return item.complete === true;
//             })
//             .map(item => (
//               <TodoItem item={item} />
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TodoList;
