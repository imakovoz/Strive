import { merge } from 'lodash';
import { combineReducers } from 'redux';
import users from './users_reducer.js';
import { RECEIVE_USERS } from "../actions/users_actions";


const entitiesReducer = combineReducers({users: users});

export default entitiesReducer;
