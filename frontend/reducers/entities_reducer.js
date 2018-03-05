import { merge } from 'lodash';
import { combineReducers } from 'redux';
import users from './users_reducer';
import posts from './posts_reducer';
import { RECEIVE_USERS } from "../actions/user_actions";
import { RECEIVE_POSTS } from "../actions/post_actions";


const entitiesReducer = combineReducers({users, posts});

export default entitiesReducer;
