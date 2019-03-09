import React, { Component } from 'react';
import './App.css';
import List from './List';
import UsdCad from './components/usdcad';
import EurUsd from './components/eurusd';
import BtcUsd from './components/btcusd';
import Toronto from './components/toronto';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false
    }
    this.handleChangeUsdCad = this.handleChangeUsdCad.bind(this);
    this.handleChangeBtcUsd = this.handleChangeBtcUsd.bind(this);
    this.handleChangeEurUsd = this.handleChangeEurUsd.bind(this);
    this.handleChangeToronto = this.handleChangeToronto.bind(this);
  }
  
  handleChangeUsdCad() {
    this.setState({showComponent: <UsdCad />});
  }
  handleChangeBtcUsd() {
    this.setState({showComponent: <BtcUsd />});
  }
  handleChangeEurUsd() {
    this.setState({showComponent: <EurUsd />});
  }
  handleChangeToronto() {
    this.setState({showComponent: <Toronto />});
  }


 

  render() {
    return (
      <div className="App">
        <div className="left-container">
          <List onClickUsd_cad={this.handleChangeUsdCad}
                onClickUsd_btc={this.handleChangeBtcUsd}
                onClickEur_usd={this.handleChangeEurUsd}
                onClickToronto={this.handleChangeToronto}
          />
        </div>
        <div className="right-container">
          {this.state.showComponent}
        </div> 
      </div>
    );
  }
}

export default App;