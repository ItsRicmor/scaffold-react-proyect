import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import Routes from '../constants/Routes';

const NotFoundPage = lazy(() => import('./pages/not-found-page'));
const HomePage = lazy(() => import('./pages/home-page'));

export default (props) => (
  <ConnectedRouter history={props.history}>
    {/* <MainNav /> */}
    <Suspense fallback={<div>loading...</div>}>
      <>
        <Switch>
          <Route exact path={Routes.Home} component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    </Suspense>
  </ConnectedRouter>
);
