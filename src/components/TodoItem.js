import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  handleEditing=()=>{
   this.setState({
     editing: true
   })
  }
  handleUpdateDone=(event)=>{
    if(event.key == "Enter"){
      this.setState({
        editing: false
      })
    }
  }
  render() {
    let viewMode = {};
    let editMode = {};
    if(this.state.editing){
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      <li>
         <input type="checkbox" 
         checked={this.props.todo.completed}
         onChange={() => this.props.handleChange(this.props.todo.id)}/>
         <button onClick={() => this.props.delTodo(this.props.todo.id)}>Delete</button>
         {this.props.todo.title}
         <div onDoubleClick={this.handleEditing} style={viewMode}>...</div>
         <input value={this.props.todo.title} type="text" style={editMode}
          onChange={e=> {this.props.setUpdate(e.target.value, this.props.todo.id)}}
          onKeyDown={this.handleUpdateDone}></input>
          </li>
    );
  }
}

export default TodoItem;
