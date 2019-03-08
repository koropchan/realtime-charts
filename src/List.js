import React, { Component } from 'react';
import './List.css';
import { Table } from 'reactstrap';
import currencies from './images/Bitcoin.png';
import weather from './images/Weather.png';
import news from './images/News.png';


class List extends Component {
      constructor(props) {
        super(props);
        this.state = {
            currencyData: [],
            weatherData: [],
            newsData: []
        };
      }

      componentDidMount() {

        Promise.all([
            fetch('https://free.currencyconverterapi.com/api/v6/convert?q=USD_CAD,BTC_USD,EUR_USD&compact=ultra&apiKey=95c86d5989f092030892'),
            fetch('http://api.openweathermap.org/data/2.5/group?id=6167865,6173331,6077243&units=metric&appid=64876bc29180def9bf49f6f871432415')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            currencyData: data1, 
            weatherData: data2
        }));
        
      }

      render() {
          if (!this.state.weatherData.list){
              return null;
          }
      return (
        <div className="container">
            <div className="currency">
                <div className="head">
                    <div className="text">Currency and Stocks</div>
                    <img src={currencies} alt="icon"/>
                </div>
                <div className="body">
                    <Table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Last Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={this.props.onClickUsd_btc}>
                                <th scope="row">Bitcoin/USD</th>
                                <td>{Math.round(this.state.currencyData.BTC_USD)}$</td>
                            </tr>
                            <tr onClick={this.props.onClickEur_usd}>
                                <th scope="row">EUR/USD</th>
                                <td>{this.state.currencyData.EUR_USD}$</td>
                            </tr>
                            <tr onClick={this.props.onClickUsd_cad}>
                                <th scope="row">USD/CAD</th>
                                <td>{this.state.currencyData.USD_CAD}$</td>
                                </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="weather">
                <div className="head">
                    <div className="text">Weather</div>
                    <img src={weather} alt="icon"/>
                </div>
                <div className="body">
                    <Table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Current</th>
                                <th>Humidity</th>
                                <th>Wind speed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Toronto</th>
                                <td>{Math.round(this.state.weatherData.list[0].main.temp)}C</td>
                                <td>{Math.round(this.state.weatherData.list[0].main.humidity)}%</td>
                                <td>{Math.round(this.state.weatherData.list[0].wind.speed)}m/s</td>
                            </tr>
                            <tr>
                                <th scope="row">Vancouver</th>
                                <td>{Math.round(this.state.weatherData.list[1].main.temp)}C</td>
                                <td>{Math.round(this.state.weatherData.list[1].main.humidity)}%</td>
                                <td>{Math.round(this.state.weatherData.list[1].wind.speed)}m/s</td>
                            </tr>
                            <tr>
                                <th scope="row">Montreal</th>
                                <td>{Math.round(this.state.weatherData.list[2].main.temp)}C</td>
                                <td>{Math.round(this.state.weatherData.list[2].main.humidity)}%</td>
                                <td>{Math.round(this.state.weatherData.list[2].wind.speed)}m/s</td>
                                </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="news">
                <div className="head">
                    <div className="text">News</div>
                    <img src={news} alt="icon"/>
                </div>
                <div className="body">
                    <Table>
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                            </tr>
                            <tr>
                                <td>Larry</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
      );
    }
  }

  export default List;
