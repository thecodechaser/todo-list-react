import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(response => response.json())
    .then(data => this.setState({todos: data}))
  }
  handleChange=(id)=>{
      this.setState(prevState => ({
          todos: prevState.todos.map(todo =>{
              if(todo.id==id){
                  return {
                      ...todo, completed: !todo.completed
                  }
                  
              }
              return todo;
          })
      }));
  } 
  delTodo = (id)=> {
     this.setState({
         todos: [
             ...this.state.todos.filter(todo =>{
                 return todo.id != id;
             })
         ]
     })
  }
  addTodoItem=(title)=>{
      const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
      };
      this.setState({
          todos: [...this.state.todos, newTodo]
      })
  }
  setUpdate =(title, id)=>{
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id == id){
          todo.title = title
        }
        return todo;
      })
    })
  }
  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoItem={this.addTodoItem}/>
        <TodoList todos={this.state.todos} handleChange={this.handleChange} delTodo={this.delTodo} setUpdate={this.setUpdate}/>
      </div>
    );
  }
}

export default TodoContainer;
