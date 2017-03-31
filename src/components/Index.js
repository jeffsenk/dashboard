import React from 'react';
import TradeTable from './TradeTable';

export default class Index extends React.Component {
  render(){
    return (
      <div className="home">
        <TradeTable trades={this.props.trades}/>
      </div>
    );
  }
}
