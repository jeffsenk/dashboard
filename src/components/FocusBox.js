import React from 'react';
import axios from 'axios';

export default class PriceBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price : 0
    }
  }

  componentDidMount(){
    axios.get(this.props.product).then(function(res){
      console.log(res);
      this.setState({
        price : res.data[3]
      });
      console.log(this.state.price);
    }.bind(this));
  }

  render(){
    const style = {
      width:'100%',
      height:'400px',
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

    const tStyle={
      width: '100%',
      height: '100%'
    }
    const trStyle={
      height: '100%'
    }
    const tdStyle={
      height: '50%' 
    }
    const hrefStyle={
      display:"block",
      textAlign:"center"
    }
    const imgStyle={
      maxWidth:"100%",
      width:"600px"
    }

    return (
      <div style={style}>
        <div>
          <a href="https://plot.ly/~jeffsenk/5/?share_key=hOrVgKsqWxAawIztyY1b1N" target="_blank" title="platinum" style={hrefStyle}>
            <img src="https://plot.ly/~jeffsenk/5.png?share_key=hOrVgKsqWxAawIztyY1b1N" alt="platinum" style={imgStyle} onerror="this.onerror=null;this.src='https://plot.ly/404.png';" />
          </a>
          <script data-plotly="jeffsenk:5" sharekey-plotly="hOrVgKsqWxAawIztyY1b1N" src="https://plot.ly/embed.js" async></script>      
        </div>
      </div>
    );
  };
}
