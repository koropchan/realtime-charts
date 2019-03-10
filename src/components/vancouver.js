import React, { Component } from 'react';
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, ResponsiveContainer} from 'recharts';

class Vancouver extends Component {

    constructor(props) {
        super(props);
        this.state = {
          weatherData: [],
        }
    }

    componentDidMount() {

        var url = `https://api.openweathermap.org/data/2.5/forecast?id=6173331&appid=64876bc29180def9bf49f6f871432415`;
        
        fetch(url)
          .then(res => res.json())
          .then(d => {
            this.setState({weatherData: d});
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
            <AreaChart width={942} height={325} data={this.state.weatherData.list}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
            <linearGradient id="colorHumidity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dt_txt" />
            <YAxis type="number" domain={['dataMin - 0.0001', 'auto']} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="main.humidity" stroke="#82ca9d" fillOpacity={1} fill="url(#colorHumidity)"/>
            </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>
      );
    } 
}
  
  export default Vancouver;
