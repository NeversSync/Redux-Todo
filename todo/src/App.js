import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './Todo/TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Get it together</h2>
        </div>
        <TodoListContainer />

      </div>
    );
  }
}

export default App;
