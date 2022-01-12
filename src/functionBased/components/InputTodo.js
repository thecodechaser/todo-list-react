import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [inputTitle, setTitle] = useState({
    title: '',
  });
  const onChange = (e) => {
    setTitle({
      ...inputTitle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoItem } = props;
    if (inputTitle.title.trim()) {
      addTodoItem(inputTitle.title);
      setTitle({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Add todo..." value={inputTitle.title} onChange={onChange} name="title" className="add-todo" />
      <button type="submit" className="add-btn">
        <FaPlusCircle className="add-icon" />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
