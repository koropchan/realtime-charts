import React, { Component } from 'react';
import './List.css';

class List extends Component {
    render() {
      return (
        <div className="container">
            <div className="currency">
                <div className="head"></div>
                <div className="body"></div>
            </div>
            <div className="weather">
                <div className="head"></div>
                <div className="body"></div>
            </div>
            <div className="news">
                <div className="head"></div>
                <div className="body"></div>
            </div>
        </div>
      );
    }
  }
  
  export default List;