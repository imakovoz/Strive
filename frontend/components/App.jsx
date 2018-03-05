import React from 'react';
import GreetingContainer from './greeting_container';
import LoginContainer from './login_form_container';
import SignupContainer from './signup_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/" component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
