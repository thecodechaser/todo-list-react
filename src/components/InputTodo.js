import React from "react";

class InputTodo extends React.Component {
    constructor(){
        super()
        this.state ={
            title: ""
        }
    }
    onChange=(e)=>{
       this.setState({
           [e.target.name]: e.target.value
    })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.title.trim()){
        this.props.addTodoItem(this.state.title);
        this.setState({
            title: ""
        })
    } else {
        alert("Please write item");
    }
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add todo..." value={this.state.title} onChange={this.onChange} name="title"/>
            <button>Submit</button>
        </form>
        );
    };
}

export default InputTodo;