import { merge } from "lodash";
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  LIMIT_COMMENTS
} from "../../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });
    case LIMIT_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};

export default commentsReducer;
