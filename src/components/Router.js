import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from '../App';
import SoldPets from './SoldPets';

export default (
  <Route path="/" component={App}>
   
    <Route path="/SoldPets" component={SoldPets} />
 
  </Route>
);