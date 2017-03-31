import React from 'react';

export default class InputBar extends React.Component{
  render(){
    return(
      <form action="/trades" method="POST">
        <input type="text" placeholder="action" name="action"/>
        <input type="text" placeholder="product" name="product"/>
        <input type="text" placeholder="size" name="size"/>
        <input type="text" placeholder="price" name="price"/>
        <input type="text" placeholder="counterParty" name="counterParty"/>
        <input type="text" placeholder="date" name="date"/>
        <button type="submit">submit</button>
      </form>
    );
  }
}
