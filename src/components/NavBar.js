import React from 'react';

class NavBar extends React.Component{
  render(){
    const style={
      position: "fixed",
      top: "0",
      overflow:"hidden",
      width:"100%",
      height: "60px",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      zIndex:"1",
      marginBottom:"10px",
      backgroundColor: "white"
    }
    return(
      <div style={style}>
        {this.props.title}
      </div>
    );
  }
}
export default NavBar;
