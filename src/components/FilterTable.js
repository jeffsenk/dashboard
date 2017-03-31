import React from 'react';
import TradeTable from './TradeTable';
import SearchBar from './SearchBar';
import InputBar from './InputBar';

export default class FilterTable extends React.Component{
  render(){
    return(
      <div>
        <SearchBar/>
        <TradeTable trades={this.props.trades}/>
        <InputBar/>
      </div>
    );
  }
}

