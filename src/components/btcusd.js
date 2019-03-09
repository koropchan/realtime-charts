import React, { Component } from 'react';
import moment from 'moment';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer} from 'recharts';

class BtcUsd extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [],
        }
    }

    componentDidMount() {
        
        //Using 'Moment' dependecy to get current date and format it, also substract from date to get date range
        var currentDate = moment();
        var weekAgoDate = moment().subtract(7, 'days');
        var formattedCurrentDate = currentDate.format('YYYY-MM-DD');
        var formattedWeekAgoDate = weekAgoDate.format('YYYY-MM-DD');

        var url = `https://free.currencyconverterapi.com/api/v6/convert?q=BTC_USD&compact=ultra&date=${formattedWeekAgoDate}&endDate=${formattedCurrentDate}&apiKey=95c86d5989f092030892`;
        
        fetch(url)
          .then(res => res.json())
          .then(d => {
            this.setState({data: [d]});

            //Formatting JSON data for easier use
            var dataArray = [];
            for (const prop in this.state.data[0].BTC_USD){
                dataArray.push({
                            date: prop,
                            price: this.state.data[0].BTC_USD[prop].toString()
                            })
            };
            this.setState({data: dataArray});
          })
          .catch(error => console.log(error))
    }

    render() {

      const divStyle = {
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      };

      return (
        <div style={divStyle}>
            <div style={{width: '100%', height: '50%'}}>
            <ResponsiveContainer>
            <LineChart width={942} height={325} data={this.state.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis type="number" domain={['dataMin - 0.0001', 'auto']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
      );
    } 
}
  
  export default BtcUsd;
