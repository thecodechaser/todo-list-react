import React, { Component, useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoItem =(props)=> {
  const [state, setState] = useState({
    editing: false
  })

  const handleEditing=()=>{
   setState({
     editing: true
   })
  }
  const handleUpdateDone=(event)=>{
    if(event.key == "Enter"){
      setState({
        editing: false
      })
    }
  }
    let viewMode = {};
    let editMode = {};
    if(state.editing){
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <li>
         <input type="checkbox" 
         checked={props.todo.completed}
         onChange={() => props.handleChange(props.todo.id)}/>
         <button onClick={() => props.delTodo(props.todo.id)}><FaTrash /></button>
         {props.todo.title}
         <div onDoubleClick={handleEditing} style={viewMode}>...</div>
         <input value={props.todo.title} type="text" style={editMode}
          onChange={e=> {props.setUpdate(e.target.value, props.todo.id)}}
          onKeyDown={handleUpdateDone}></input>
          </li>
    );
}

export default TodoItem;
