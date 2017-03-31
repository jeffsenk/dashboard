import React from 'react';
import FilterTable from './FilterTable';

export default class Index extends React.Component {
  render(){

    return (
      <div>
        <FilterTable trades={this.props.trades}/>
      </div>
    );
  }
}
