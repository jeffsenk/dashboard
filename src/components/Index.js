import React from 'react';
import PriceBox from './PriceBox'
import NavBar from './NavBar'
import FocusBox from './FocusBox'
import RssBox from './RssBox'
import DBbox from './DBbox'
import CommentaryBox from './CommentaryBox'

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
      paddingTop: '20px',
      verticalAlgin: 'top'
//      paddingBottom: '20px'
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
    const commentStyle ={
      width: '100%',
      display: 'inline-block',
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
	    <DBbox cite={lme} title='Scrap Steel' product='/steel'/>
          </div>
          <div style={fbStyle}>
            <FocusBox cite={jm} title='PL' product='/platinum'/>
            <FocusBox cite={jm} title='PA' product='/palladium'/>
            <FocusBox cite={jm} title='RO' product='/rhodium'/>
          </div>
          <div style={rssStyle}>
            <RssBox feed='bullionDesk'/>
          </div>
          <div style={commentStyle}>
            <CommentaryBox source='commentary'/>
          </div>
        </div>
      </div>
    );
  };
}
