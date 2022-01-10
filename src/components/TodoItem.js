import React from "react";

class TodoItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <li>{this.props.todo.title}</li>
        );
    }
}

export default TodoItem;