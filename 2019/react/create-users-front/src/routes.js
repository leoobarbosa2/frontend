import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main'
import UsersList from './pages/UsersList'
import UniqueUser from './pages/UniqueUser'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/users" component={UsersList} />
        <Route path="/users/:id" component={UniqueUser} />
      </Switch>
    </BrowserRouter>
  )
}
