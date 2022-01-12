import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const [state, setState] = useState({
    editing: false,
  });

  const handleEditing = () => {
    setState({
      editing: true,
    });
  };
  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setState({
        editing: false,
      });
    }
  };
  const viewMode = {};
  const editMode = {};
  if (state.editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const {
    todo: { id, completed, title },
    handleChange,
    delTodo,
    setUpdate,
  } = props;
  return (
    <>
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChange(id)}
          className="checkBox"
        />
        <button type="button" onClick={() => delTodo(id)} className="trash-btn">
          <FaTrash className="trash-icon" />
        </button>
        <span className="title" style={completed ? completedStyle : null}>{title}</span>
        <input
          value={title}
          type="text"
          style={editMode}
          onChange={(e) => { setUpdate(e.target.value, id); }}
          onKeyDown={handleUpdateDone}
        />
      </li>
      <div onDoubleClick={handleEditing} style={viewMode} className="edit-item">...</div>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
