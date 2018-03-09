import { merge } from 'lodash';
import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors/session_errors_reducer';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const errorsReducer = combineReducers({session: sessionErrorsReducer});

export default errorsReducer;
