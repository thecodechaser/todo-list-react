import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Meet The Doctor',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Complete the project',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Prepare your lunch',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Join stand-up meeting',
          completed: true,
        },
      ],
    };
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
     }

     )
  }

  addTodoItem=(title)=>{
    //   const id=this.state.todos.length;
      const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
      };
      this.setState({
          todos: [...this.state.todos, newTodo]
      })
  }
  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoItem={this.addTodoItem}/>
        <TodoList todos={this.state.todos} handleChange={this.handleChange} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default TodoContainer;
