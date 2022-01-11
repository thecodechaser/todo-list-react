import React from 'react';
import TodoItem from './TodoItem';

const TodoList =(props)=> {
    return (
      <ul>
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChange={props.handleChange} delTodo={props.delTodo} setUpdate={props.setUpdate}/>
        ))}
      </ul>
    );
}

export default TodoList;
