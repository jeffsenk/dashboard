import React from 'react';
import FilterTable from './FilterTable';
import axios from 'axios';

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price : 0
    }
  }

  componentDidMount(){
    axios.get('/trades').then(function(data){
      console.log(data);
      this.setState({
        price : data.data.result[0].price
      });
      console.log(this.state.price);
    }.bind(this));
  }

  render(){
    return (
      <div>
	{this.state.price}
      </div>
    );
  };
}
