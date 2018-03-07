import { merge } from 'lodash';
import { combineReducers } from 'redux';
import users from './users_reducer';
import posts from './posts_reducer';
import workouts from './workouts_reducer';
import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_POSTS, RECEIVE_POST } from "../actions/post_actions";
import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT } from "../actions/post_actions";


const entitiesReducer = combineReducers({users, posts, workouts});

export default entitiesReducer;
