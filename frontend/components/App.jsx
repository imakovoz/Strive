import React from 'react';
import DashboardContainer from './dashboard/dashboard_container';
import LoginContainer from './login/login_form_container';
import SignupContainer from './login/signup_form_container';
import PostFormContainer from './post/post_form_container';
import EditPostFormContainer from './post/edit_post_form_container';
import PostShowContainer from './post/post_show_container';
import RouteIndexContainer from './routes/index/routes_index_container';
import RouteShowContainer from './routes/show/show_routes_container';
import NewRouteContainer from './routes/create/new_route_container';
import RecordRouteContainer from './routes/record/record_route_container';
import WorkoutFormContainer from './workout/workout_form_container';
import WorkoutShowContainer from './workout/workout_show_container';
import ProfilePageContainer from './user/profile_page_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/posts/new" component={PostFormContainer} />
      <ProtectedRoute path="/routes/new" component={NewRouteContainer} />
      <ProtectedRoute path="/routes/record" component={RecordRouteContainer} />
      <ProtectedRoute path="/routes/:id" component={RouteShowContainer} />
      <ProtectedRoute path="/routes" component={RouteIndexContainer} />
      <ProtectedRoute path="/users/:user_id/posts/:post_id/edit" component={EditPostFormContainer} />
      <ProtectedRoute path="/users/:user_id/posts/:post_id" component={PostShowContainer} />
      <ProtectedRoute path="/users/:user_id/workouts/:workout_id" component={WorkoutShowContainer} />
      <ProtectedRoute path="/workouts/new" component={WorkoutFormContainer} />
      <ProtectedRoute path="/users/:id" component={ProfilePageContainer} />
      <ProtectedRoute path="/" component={DashboardContainer} />
    </Switch>
  </div>
);

export default App;
