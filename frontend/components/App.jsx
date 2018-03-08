import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import DashboardContainer from './dashboard/dashboard_container';
import LoginContainer from './login/login_form_container';
import SignupContainer from './login/signup_form_container';
import PostFormContainer from './post/post_form_container';
import WorkoutFormContainer from './workout/workout_form_container';
import ProfilePageContainer from './user/profile_page_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/users/:id" component={ProfilePageContainer} />
      <ProtectedRoute path="/posts/new" component={PostFormContainer} />
    <ProtectedRoute path="/workouts/new" component={WorkoutFormContainer} />
      <ProtectedRoute path="/" component={DashboardContainer} />
    </Switch>
  </div>
);

export default App;
