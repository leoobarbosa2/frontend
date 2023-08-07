import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
}
