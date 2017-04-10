import React from 'react';
import PriceBox from './PriceBox'
import NavBar from './NavBar'
import FocusBox from './FocusBox'
import RssBox from './RssBox'

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
      height:'200px',
      borderBottomStyle:'solid',
      borderBottomWidth: '1px',
      borderBottomColor: 'lightGrey',
      paddingBottom: '20px'
    }
    const fbStyle ={
      width: '65%',
      display: 'inline-block',
      marginRight: '20px'
    }
    const rssStyle ={
      verticalAlign: 'top',
      width: '30%',
      display: 'inline-block'
    }
  
    const lme = 'LME USD/tonne';
    const jm = 'JM USD/troy oz';

    return (
      <div style={style}>
        <NavBar title='Techemet'/>
        <div style={bodyStyle}>
          <div style={pbStyle}>
	    <PriceBox cite={lme} title='CP' product='/copper'/>
	    <PriceBox cite={lme} title='AL' product='/aluminum'/>
	    <PriceBox cite={lme} title='NI' product='/nickel'/>
	    <PriceBox cite={jm} title='RU' product='/ruthenium'/>
	    <PriceBox cite={jm} title='IR' product='/iridium'/>
          </div>
          <div style={fbStyle}>
            <FocusBox cite={jm} title='PL' product='/platinum'/>
            <FocusBox cite={jm} title='PA' product='/palladium'/>
            <FocusBox cite={jm} title='RO' product='/rhodium'/>
          </div>
          <div style={rssStyle}>
            <RssBox feed='bullionDesk'/>
          </div>
        </div>
      </div>
    );
  };
}
