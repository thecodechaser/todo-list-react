import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem key={todo.key} todo={todo}/>
                ))}
            </ul>
        );
    }
}

export default TodoList;