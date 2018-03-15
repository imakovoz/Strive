import { merge } from 'lodash';
import { combineReducers } from 'redux';
import users from './search/users_search_reducer';
import posts from './search/users_search_reducer';
import routes from './search/users_search_reducer';
import workouts from './search/users_search_reducer';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const searchReducer = combineReducers({users, posts, routes, workouts});

export default searchReducer;
