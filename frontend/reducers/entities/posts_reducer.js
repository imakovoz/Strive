import { merge } from 'lodash';
import { RECEIVE_POSTS, RECEIVE_POST, LIMIT_POSTS } from "../../actions/post_actions";


const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    case LIMIT_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default postsReducer;
