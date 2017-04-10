import React from 'react';
import axios from 'axios';

export default class RssBox extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data: []
    }
  }

  componentDidMount(){
    axios.get(this.props.feed).then(function(res){
      this.setState({
        data: res.data.entries
      });
    }.bind(this));
  }

  render(){
    const style = {
      display: 'inline-block',
      width:'100%',
      height:'1000px',
      borderStyle:'solid',
      borderWidth:'1px',
//      borderRadius: '5px',
//      backgroundColor: '#FFFFFF',
      color:'#000000',
      fontSize:'smaller',
      fontWeight: '100',
      display: 'inline-block',
      marginRight: '10px',
      marginTop: '25px',
      marginLeft: '10px'
    }

    console.log(this.state)

    if(this.state.data.length >0){
      const list = this.state.data.map((item) =>
        <li> 
          <a href={item.link}>{item.title}</a>
        </li>
      );

      return (
        <div style={style}>
          <ul>{list}</ul>
        </div>
      )
    }else{
      return (
        <div style={style}>
          <div>
            loading rss
          </div>
        </div>
      );
    }
  };
}
