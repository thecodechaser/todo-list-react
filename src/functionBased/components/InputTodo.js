import React, { useState } from "react";
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
   
    const [inputTitle, setTitle] = useState({
        title: ""
    });
  const onChange=(e)=>{
       setTitle({
           ...inputTitle,
           [e.target.name]: e.target.value
       })
    }

   const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputTitle.title.trim()){
        props.addTodoItem(inputTitle.title);
        setTitle({
            title: ""
        })
    } else {
        alert("Please write item");
    }
    }
        return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add todo..." value={inputTitle.title} onChange={onChange} name="title"/>
            <button><FaPlusCircle /></button>
        </form>
        );
}

export default InputTodo;