import React, { Component } from 'react';
import './App.css';
import List from './List';
import UsdCad from './components/usdcad';
import EurUsd from './components/eurusd';
import BtcUsd from './components/btcusd';
import Toronto from './components/toronto';
import Vancouver from './components/vancouver';
import Montreal from './components/montreal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false
    }
  }
  
  handleChangeUsdCad = () => {
    this.setState({showComponent: <UsdCad />});
  }
  handleChangeBtcUsd = () => {
    this.setState({showComponent: <BtcUsd />});
  }
  handleChangeEurUsd = () => {
    this.setState({showComponent: <EurUsd />});
  }
  handleChangeToronto = () => {
    this.setState({showComponent: <Toronto />});
  }
  handleChangeVancouver = () => {
    this.setState({showComponent: <Vancouver />});
  }
  handleChangeMontreal = () => {
    this.setState({showComponent: <Montreal />});
  }


 

  render() {
    return (
      <div className="App">
        <div className="left-container">
          <List onClickUsd_cad={this.handleChangeUsdCad}
                onClickUsd_btc={this.handleChangeBtcUsd}
                onClickEur_usd={this.handleChangeEurUsd}
                onClickToronto={this.handleChangeToronto}
                onClickVancouver={this.handleChangeVancouver}
                onClickMontreal={this.handleChangeMontreal}
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