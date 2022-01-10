import React from "react";
import TodoList from "./TodoList";

class TodoContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Meet The Doctor",
                    completed: true
                },
                {
                    id: 2,
                    title: "Complete the project",
                    completed: false
                },
                {
                    id: 3,
                    title: "Prepare your lunch",
                    completed: false
                },
                {
                    id: 4,
                    title: "Join stand-up meeting",
                    completed: true
                }
            ]
        }
    };
    
    render() {
        return (
            <div>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default TodoContainer;

