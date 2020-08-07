import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CountryDetails from '../pages/CountryDetails';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/:cioc" component={CountryDetails} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
