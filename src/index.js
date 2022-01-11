import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// component files
import TodoContainer from './functionBased/components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <TodoContainer />
    </Router>
  </React.StrictMode>, document.getElementById('root'),
);
