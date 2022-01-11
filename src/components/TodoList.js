import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChange={this.props.handleChange} delTodo={this.props.delTodo} setUpdate={this.props.setUpdate}/>
        ))}
      </ul>
    );
  }
}

export default TodoList;
