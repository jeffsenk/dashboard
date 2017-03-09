import React from 'react';
import {Route, IndexRoute} from 'react-router'
import Layout from './components/Layout';
import Index from './components/Index';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Index}/>
  </Route>
);

export default routes;
