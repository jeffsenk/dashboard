import React from 'react';
import axios from 'axios';

export default class DBBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price : 0,
      date: ""
    }
  }

  componentDidMount(){
    axios.get(this.props.product).then(function(res){
      this.setState({
        price : res.data.result[res.data.result.length-1].price,
        date: res.data.result[res.data.result.length-1].date
      });
    }.bind(this));
  }

  render(){
    const style = {
      width:'15%',
      height:'100px',
      borderStyle:'solid',
      borderWidth:'1px',
//      borderRadius: '5px',
//      backgroundColor: '#FFFFFF',
      color:'#000000',
      fontWeight: '100',
      display: 'inline-block',
      marginRight: '10px',
      marginTop: '25px',
      marginLeft: '10px',
      marginBottom: '20px',
      verticalAlign: 'top'
    }

    const tStyle={
      width: '100%',
      height: '100%'
    }
    const trStyle={
      height: '100%'
    }
    const tdStyle={
      height: '50%' 
    }
    const citeStyle={
      fontSize: 'small',
      color: 'grey',
      paddingBottom: '10px'
    }

    return (
      <div style={style}>
        <table style={tStyle}>
          <tr style={trStyle}>
            <td style={tdStyle}>{this.props.title}:</td>
            <td style={tdStyle}>{this.state.price}</td>
          </tr>
        </table>
        <div style={citeStyle}>{this.props.cite} {this.state.date}</div>
      </div>
    );
  };
}
