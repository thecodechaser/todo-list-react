import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 0,
          title: 'Meet The Doctor',
          completed: true,
        },
        {
          id: 1,
          title: 'Complete the project',
          completed: false,
        },
        {
          id: 2,
          title: 'Prepare your lunch',
          completed: false,
        },
        {
          id: 3,
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
  render() {
    return (
      <div>
        <Header />
        <InputTodo />
        <TodoList todos={this.state.todos} handleChange={this.handleChange} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default TodoContainer;
