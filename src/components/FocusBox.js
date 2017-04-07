import React from 'react';
import axios from 'axios';
import Plot from './Plot';

export default class PriceBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price : 0
    }
  }

  componentDidMount(){
    axios.get(this.props.product).then(function(res){
      console.log(res);
      this.setState({
        price : res.data[3]
      });
      console.log(this.state.price);
    }.bind(this));
  }

  render(){
    const style = {
      width:'100%',
      height:'400px',
      borderStyle:'solid',
      borderWidth:'1px',
//      borderRadius: '5px',
//      backgroundColor: '#FFFFFF',
      color:'#000000',
      fontWeight: '100',
      display: 'inline-block',
      marginRight: '10px',
      marginTop: '25px',
      marginLeft: '10px'
    }

    const hrefStyle={
      display:"block",
      textAlign:"center"
    }
    const imgStyle={
      maxWidth:"100%",
      width:"600px"
    }

    return (
      <div style={style}>
        <div>
          <Plot/>
        </div>
      </div>
    );
  };
}
