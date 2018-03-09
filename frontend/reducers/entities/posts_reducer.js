import { merge } from 'lodash';
import { RECEIVE_POSTS, RECEIVE_POST } from "../../actions/post_actions";


const usersReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    default:
      return state;
  }
};

export default usersReducer;
