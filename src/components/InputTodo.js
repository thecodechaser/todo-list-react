import React from "react";

class InputTodo extends React.Component {
    constructor(){
        super()
    }

    render() {
        return (
        <form>
            <input type="text" placeholder="Add todo..." />
            <button>Submit</button>
        </form>
        );
    };
}

export default InputTodo;