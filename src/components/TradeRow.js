import React from 'react';

export default class TradeRow extends React.Component {
  render(){
    return(
      <tr>
        <td>{this.props.trade.action}</td>
        <td>{this.props.trade.product}</td>
        <td>{this.props.trade.size}</td>
        <td>{this.props.trade.price}</td>
        <td>{this.props.trade.counterParty}</td>
        <td>{this.props.trade.date}</td>
      </tr>
    )
  }
}
