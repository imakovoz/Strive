import { merge } from 'lodash';
import { RECEIVE_SEARCHED_POSTS } from "../../actions/post_actions";


const postsSearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCHED_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default postsSearchReducer;
