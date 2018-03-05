import { merge } from 'lodash';
import { RECEIVE_USERS } from "../actions/user_actions";


const usersReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
