import React, { Component } from 'react';
import './App.css';
import TodoCreator from './containers/TodoCreator.jsx';
import TodoList from './containers/TodoList.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
            <TodoCreator />
            <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
