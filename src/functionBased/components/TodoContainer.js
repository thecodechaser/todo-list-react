import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

const TodoContainer =() =>{
  const [todos, setState] = useState([]);

  useEffect(() => {
    console.log("hello")
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => response.json())
      .then(data => setState(data))
  }, [setState])
  const handleChange=(id)=>{
      setState(prevState => ({
          todos: prevState.map(todo =>{
              if(todo.id==id){
                  return {
                      ...todo, completed: !todo.completed
                  }
                  
              }
              return todo;
          })
      }));
  } 
  const delTodo = (id)=> {
     setState({
         todos: [
             ...todos.filter(todo =>{
                 return todo.id != id;
             })
         ]
     })
  }
 const addTodoItem=(title)=>{
      const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
      };
      setState({
          todos: [...todos, newTodo]
      })
  }
 const setUpdate =(title, id)=>{
    setState({
      todos: todos.map(todo => {
        if(todo.id == id){
          todo.title = title
        }
        return todo;
      })
    })
  }
   
    return (
      <div>
        <Header />
        <InputTodo addTodoItem={addTodoItem}/>
        <TodoList todos={todos} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate}/>
      </div>
    );
  
}

export default TodoContainer;
