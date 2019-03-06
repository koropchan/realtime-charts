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
          data: [],
        };
      }

      componentDidMount() {

        var url = 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_CAD,BTC_USD,USD_EUR&compact=ultra&apiKey=95c86d5989f092030892';
        fetch(url)
          .then(res => res.json())
          .then(json => {
            this.setState({
              data: json,
            })
          });
      }

      render() {
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
                            <tr>
                                <th scope="row">Bitcoin/USD</th>
                                <td>{this.state.data.BTC_USD}$</td>
                            </tr>
                            <tr>
                                <th scope="row">USD/EUR</th>
                                <td>{this.state.data.USD_EUR}$</td>
                            </tr>
                            <tr>
                                <th scope="row">USD/CAD</th>
                                <td>{this.state.data.USD_CAD}$</td>
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
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">Vancouver</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">Montreal</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
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
                                <th>Last Price</th>
                                <th>High</th>
                                <th>Low</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Bitcoin</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">SP500</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">$CAD</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
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