import React from 'react';
import axios from 'axios';
import TradeRow from './TradeRow';

export default class TradeTable extends React.Component{

  render(){
    var rows =[];
    console.log(this.props.trades.data.result);
    this.props.trades.data.result.forEach(function(trade){
      rows.push(<TradeRow trade={trade}/>);
    });

   return(
      <div className='Base'>
	 <table>
	    <tbody>{rows}</tbody>
	 </table>
      </div>
    );
  }
}
