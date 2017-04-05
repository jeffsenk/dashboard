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
      borderBottomStyle:'solid',
      borderBottomWidth: '1px',
      borderBottomColor: 'lightGrey'
    }

    return (
      <div style={style}>
        <NavBar title='Techemet'/>
        <div style={bodyStyle}>
          <div style={pbStyle}>
	    <PriceBox title='CP' product='/copper'/>
	    <PriceBox title='AL' product='/aluminum'/>
	    <PriceBox title='NI' product='/nickel'/>
	    <PriceBox title='RU' product='/ruthenium'/>
	    <PriceBox title='IR' product='/iridium'/>
          </div>
          <div>
            <FocusBox title='PL' product='/platinum'/>
          </div>
        </div>
      </div>
    );
  };
}
