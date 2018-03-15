import { merge } from 'lodash';
import { combineReducers } from 'redux';
import usersSearchReducer from './search/users_search_reducer';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const searchReducer = combineReducers({users: usersSearchReducer});

export default searchReducer;
