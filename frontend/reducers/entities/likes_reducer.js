import { merge } from "lodash";
import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  LIMIT_LIKES
} from "../../actions/like_actions";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIKES:
      return merge({}, action.likes);
    case RECEIVE_LIKE:
      return merge({}, state, { [action.like.id]: action.like });
    case LIMIT_LIKES:
      return action.likes;
    default:
      return state;
  }
};

export default likesReducer;
