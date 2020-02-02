import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import RouteEnum from '../constants/RouteEnum';
import Toasts from './components/toasts/Toasts';

const NotFoundPage = lazy(() => import('./pages/not-found-page'));
const HomePage = lazy(() => import('./pages/home-page'));

export default (props) => (
  <ConnectedRouter history={props.history}>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route exact path={RouteEnum.Home} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Toasts />
    </Suspense>
  </ConnectedRouter>
);
