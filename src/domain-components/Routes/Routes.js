import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from '../../modules/Album';
import About from '../../modules/About';
import routes from './constants';

function Routes() {
  return (
    <Switch>
      <Route component={Album} path="/"  />
      <Route component={Album} path={routes.album}  />
      <Route component={About} path={routes.booking} />
    </Switch>
  );
}

export default Routes;
