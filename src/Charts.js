import React, { Component } from 'react';
import moment from 'moment';

class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [],
        //   isLoaded: false,
        }
    }

    componentDidMount() {
        
        var date = moment();
        var formattedDate = date.format('YYYY-MM-DD');
        var url = `https://free.currencyconverterapi.com/api/v6/convert?q=USD_CAD,PHP_USD&compact=ultra&date=2019-03-01&endDate=${formattedDate}&apiKey=95c86d5989f092030892`;
        
        fetch(url)
          .then(res => res.json())
          .then(json => {
            this.setState({
            //   isLoaded: true,
              data: [json],
            })
          });
    }

    render() {
      
    //   var {isLoaded,data} = this.state;
    //   if (!isLoaded){
    //       return <div>Loading...</div>
    //   }
    //   else {

      return (
        <div>
            <div>
            <ul>
                {this.state.data.map(item =>(
                    <li></li>
                ))};
            </ul>
            </div>
        </div>
      );
    //   }
    } 
}
  
  export default Charts;