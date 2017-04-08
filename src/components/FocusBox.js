import React from 'react';
import axios from 'axios';
import Plot from './Plot';

export default class PriceBox extends React.Component {

  render(){
    const style = {
      width:'70%',
      height:'300px',
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

    const citeStyle={
      fontSize : 'small',
      color: 'grey'
    }

    return (
      <div style={style}>
        <div>{this.props.title}</div>
        <div>
          <Plot product={this.props.product}/>
        </div>
        <div style={citeStyle}>{this.props.cite}</div>
      </div>
    );
  };
}
