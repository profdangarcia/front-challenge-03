import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from '../components/Loader';

import Home from '../pages/Home';

const Routes: React.FC = () => {
  const CountryDetails = React.lazy(() => import('../pages/CountryDetails'));
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Suspense fallback={<Loader />}>
        <Route path="/:code" component={CountryDetails} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
