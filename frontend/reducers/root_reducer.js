import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
import search from './search_reducer';

const rootReducer = combineReducers({entities, session, errors, search});

export default rootReducer;
