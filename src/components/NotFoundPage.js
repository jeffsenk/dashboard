import React from 'react';
import {Link} from 'react-router';

export default class NotFoundPage extends React.Component {
  render(){
    return(
      <div className="not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          <Link to="/">Go back to main page</Link>
        </p>
      </div>
    );
  }
}