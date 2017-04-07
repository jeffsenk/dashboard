import React from 'react';

class Plot extends React.Component{
  componentWillMount(){
    const script = document.createElement("script");
    script.src = "https://cdn.plot.ly/plotly-1.8.0.min.js";
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidMount(){
    Plotly.newPlot('plot',[{
      x:[1,2,3,4],
      y:[1,2,3,4],
      type: 'scatter'
    }],{
      margin: {
        t:0,r:0,l:30
      },
      xaxis:{
        gridcolor: 'transparent'
      }
    },{
      displayModeBar: false
    });
  }

  render(){
    return(
      <div id="plot"></div>
    );
  }
}

export default Plot;
