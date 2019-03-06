import React, { Component } from 'react';
import './App.css';
import List from './List';
import Charts from './Charts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left-container">
          <List />
        </div>
        <div className="right-container">
          <Charts />
        </div> 
      </div>
    );
  }
}

export default App;
