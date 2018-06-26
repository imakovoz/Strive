import { fetchUsers } from "../../actions/user_actions";
import { createLike, fetchLikes } from "../../actions/like_actions";
import {
  postComment,
  fetchComments,
  deleteComment
} from "../../actions/comment_actions";
import { fetchPosts, fetchFilteredPosts } from "../../actions/post_actions";
import {
  fetchWorkouts,
  fetchFilteredWorkouts
} from "../../actions/workout_actions";
import {
  selectAllPosts,
  selectAllUsers,
  selectAllFeedItems
} from "../../reducers/selectors";
import Dashboard from "./dashboard";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    posts: selectAllFeedItems(state) || [],
    post: _.values(state.entities.posts) || [],
    workout: _.values(state.entities.workouts) || [],
    users: state.entities.users || {},
    likes: _.values(state.entities.likes) || [],
    comments: _.values(state.entities.comments) || [],
    currentUser:
      state.entities.users[state.session.currentUser] ||
      state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    createLike: post => dispatch(createLike(post)),
    postComment: (post, body) => dispatch(postComment(post, body)),
    deleteComment: id => dispatch(deleteComment(id)),
    fetchComments: () => dispatch(fetchComments()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchFilteredPosts: user_id => dispatch(fetchFilteredPosts(user_id)),
    fetchFilteredWorkouts: user_id => dispatch(fetchFilteredWorkouts(user_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
