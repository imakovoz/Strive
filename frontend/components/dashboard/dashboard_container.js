import { fetchUsers } from '../../actions/user_actions';
import { fetchPosts, fetchFilteredPosts } from '../../actions/post_actions';
import {
  fetchWorkouts,
  fetchFilteredWorkouts,
} from '../../actions/workout_actions';
import {
  selectAllPosts,
  selectAllUsers,
  selectAllFeedItems,
} from '../../reducers/selectors';
import Dashboard from './dashboard';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: selectAllFeedItems(state) || [],
    users: state.entities.users || {},
    currentUser:
      state.entities.users[state.session.currentUser] ||
      state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchFilteredPosts: user_id => dispatch(fetchFilteredPosts(user_id)),
    fetchFilteredWorkouts: user_id => dispatch(fetchFilteredWorkouts(user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
