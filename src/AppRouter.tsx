import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/home';
import DesignTest from './pages/designTest';

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/design' exact component={DesignTest} />
    </Switch>
  )
}

export default AppRouter;
