import React from 'react';
import PriceBox from './PriceBox'
import NavBar from './NavBar'
import FocusBox from './FocusBox'

export default class Index extends React.Component {
  render(){

    const style = {
      fontSize: 'x-large',
      fontFamily: 'Arial',
    }
    const bodyStyle ={
      marginTop: '70px'
    }
    const pbStyle = {
      height:'150px',
      backgroundColor:'#bccad6'
    }

    return (
      <div style={style}>
        <NavBar title='Techemet'/>
        <div style={bodyStyle}>
          <div style={pbStyle}>
	    <PriceBox title='RH' product='/rhodium'/>
	    <PriceBox title='PL' product='/platinum'/>
	    <PriceBox title='PA' product='/palladium'/>
	    <PriceBox title='RU' product='/ruthenium'/>
	    <PriceBox title='IR' product='/iridium'/>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  };
}
