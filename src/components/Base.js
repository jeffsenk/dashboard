import React from 'react';
import axios from 'axios';

export default class Base extends React.Component{

  constructor(props){
    super(props);
    this.state={trades: []};
  }
  
  componentDidMount(){
    let component = this;
    axios.get('/trades').then(function(data){
      component.setState({trades:data});
      console.log(component.state) 
   });
  }

  render(){

    var rows =[];

    for(var i=0;i<this.state.trades.length;i++){
       rows.push(<div> stuff </div>);
    }
 
   return(
      <div className='Base'>
         <div>
           Some boilerplate
         </div>
	{rows}
      </div>
    );
  }
}
