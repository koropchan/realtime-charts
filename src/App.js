import React, { Component } from 'react';
import './App.css';
import Moment from 'react-moment';
import List from './List';
import Charts from './Charts';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      data: [],
      isLoaded: false,
    };
  }



  componentDidMount() {
    fetch(`http://buildingsAPI:111/api/buildings/?myparam1=${this.state.date}`)

  }

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
