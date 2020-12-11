import React, { Component } from 'react';
import TodoContainer from './Component/TodoContainer/TodoContainer';
import './App.css';

class TodoApp extends Component {
  render() {
    return (
      <div className='App'>
        <TodoContainer />
      </div>
    )
  }
}

export default TodoApp;