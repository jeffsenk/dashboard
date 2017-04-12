import React from 'react';
import axios from 'axios';

export default class CommentaryBox extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data:[]
    }
  }

  componentDidMount(){
    axios.get(this.props.source).then(function(res){
      this.setState({
        data: res.data.result
      });
    }.bind(this));
  }

  render(){
    const style ={
      height: '500px',
      width: '100%',
      overflowY: 'scroll',
      borderStyle: 'solid',
      borderWidth: '1px',
      display: 'inline-block',
      marginTop: '25px',
      fontSize: 'small'
    }

    if(this.state.data.length >0){
      const list = this.state.data.map((item) =>
        <li>
          <h1>{item.title}</h1>
          <h2>{item.date}</h2>
          <p>{item.content}</p>
        </li>
      );
      return(
        <div style={style}>
          <ul>{list}</ul>
        </div>
      )
    }else{
      return (
        <div style={style}>
          Loading commentary
        </div>
      )
    }
  };
}
