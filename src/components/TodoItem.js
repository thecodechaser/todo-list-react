import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
         <input type="checkbox" 
         checked={this.props.todo.completed}
         onChange={() => this.props.handleChange(this.props.todo.id)}/>
         <button onClick={() => this.props.delTodo(this.props.todo.id)}>Delete</button>
         {this.props.todo.title}
          </li>
    );
  }
}

export default TodoItem;
