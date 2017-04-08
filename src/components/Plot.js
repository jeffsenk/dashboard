import React from 'react';
import {LineChart, Line,XAxis,YAxis,CartesianGrid,Tooltip} from 'recharts';
import axios from 'axios';

class Plot extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      prices:[]
    }
  }

  componentDidMount(){
    axios.get(this.props.product).then(function(res){
      console.log(res);
      var temp=[];
      for(var i=res.data.length-1;i>=0;i--){
        temp.push({date : res.data[i][0], price: res.data[i][3]});
      }
      this.setState({
        prices : temp
      });
      console.log(this.state.price);
    }.bind(this));
  }

  render(){
    const style ={
      fontSize: "small"
    }
  
   return(
      <div style={style}>
      <LineChart width={600} height={250} data={this.state.prices}>
        <XAxis dataKey="date"/>
        <YAxis type="number" domain={['dataMin -50','dataMax+50']}/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Line type="monotone" dataKey="price" stroke="#000000" strokeWidth={2}  activeDot={{r:8}}/>
      </LineChart>
      </div>
    );
  }
}

export default Plot;
