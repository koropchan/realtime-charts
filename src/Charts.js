import React, { Component } from 'react';
import moment from 'moment';
// import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, } from 'recharts';

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
            this.setState({data: [d],});
            console.log(this.state.data['0'].USD_CAD[1]);
          })
          .catch(error => console.log(error))
    }

    render() {

      return (
        <div>
            <ul>
                {this.state.data.map(item => (
                    <li key= {item.id}>
                        List: {item.name}
                    </li>
                ))};
            </ul>
        </div>
      );
    } 
}
  
  export default Charts;

//   <LineChart width={730} height={250} data={this.state.data}
//   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//   <CartesianGrid strokeDasharray="3 3" />
//   <XAxis dataKey={this.state.data['0']} />
//   <YAxis />
//   <Tooltip />
//   <Legend />
//   <Line type="monotone" dataKey="pv" stroke="#8884d8" />
//   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//   </LineChart>


// var json_data = this.state.data;
//             var result = [];
//             for(var i in json_data)
//                 result.push([i, json_data[i]]);
//             this.setState({data: result});
//             console.log(this.state.data);