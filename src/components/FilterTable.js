import React from 'react';
import TradeTable from './TradeTable';
import SearchBar from './SearchBar';
import InputBar from './InputBar';

export default class FilterTable extends React.Component{
  render(){
    return(
      <div className={this.props.style}>
        <SearchBar/>
        <TradeTable trades={this.props.trades}/>
        <InputBar/>
      </div>
    );
  }
}

