import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component{
  render(){
    return(
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo.jpg"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>React Template</p>
        </footer>
      </div>
    );
  }
}
