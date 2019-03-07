import React, { Component } from 'react';
import moment from 'moment';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, } from 'recharts';

class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [],
        }
    }

    componentDidMount() {
        
        var currentDate = moment();
        var weekAgoDate = moment().subtract(7, 'days');
        var formattedCurrentDate = currentDate.format('YYYY-MM-DD');
        var formattedWeekAgoDate = weekAgoDate.format('YYYY-MM-DD');

        var url = `https://free.currencyconverterapi.com/api/v6/convert?q=USD_CAD&compact=ultra&date=${formattedWeekAgoDate}&endDate=${formattedCurrentDate}&apiKey=95c86d5989f092030892`;
        
        fetch(url)
          .then(res => res.json())
          .then(d => {
            this.setState({data: [d]});

            var dataArray = [];
            for (const prop in this.state.data['0'].USD_CAD){
                dataArray.push({
                            date: prop,
                            price: this.state.data[0].USD_CAD[prop].toString()
                            })
            };
            this.setState({data: dataArray});
          })
          .catch(error => console.log(error))
          
          
    }

    render() {
        
      return (
        <div>
          <LineChart width={730} height={250} data={this.state.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          </LineChart>
        </div>
      );
    } 
}
  
  export default Charts;

