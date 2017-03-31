import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import axios from 'axios';

window.onload = () => {
  axios.get('/trades').then(function(data){
    ReactDOM.render(<Index trades={data}/>,document.getElementById('main'));
  });
};
