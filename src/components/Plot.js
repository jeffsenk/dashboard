import React from 'react';
import {LineChart, Line} from 'recharts';

class Plot extends React.Component{

  render(){

    const data = [
      {name: "a",uv: 400},
      {name: "b",uv: 500},
      {name: "c",uv: 200}  
    ]
 
   return(
      <LineChart width={300} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#000000" strokeWidth={2}/>
      </LineChart>
    );
  }
}

export default Plot;
