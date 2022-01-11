import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import About from '../../pages/About';
import NotMatch from '../../pages/NotMatch';
import Navbar from './Navbar';
import '../../style.css';

const TodoContainer = () => {
  const [todos, setState] = useState([]);

  useEffect(() => {
    if (todos) {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((response) => response.json())
        .then((data) => setState(data));
    }
  }, []);
  const handleChange = (id) => {
    setState((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const delTodo = (id) => {
    setState([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState([...todos, newTodo]);
  };
  const setUpdate = (title, id) => {
    setState((prevState) => (
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, title,
          };
        }
        return todo;
      })
    ));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="main-container">
              <Header />
              <InputTodo addTodoItem={addTodoItem} />
              <TodoList
                todos={todos}
                handleChange={handleChange}
                delTodo={delTodo}
                setUpdate={setUpdate}
              />
            </div>
    )}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
};

export default TodoContainer;
