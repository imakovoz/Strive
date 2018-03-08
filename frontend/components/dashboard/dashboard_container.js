import { fetchUsers } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchWorkouts } from '../../actions/workout_actions';
import { selectAllPosts, selectAllUsers, selectAllFeedItems } from '../../reducers/selectors';
import Dashboard from './dashboard';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({
    posts: selectAllFeedItems(state),
    users: state.entities.users,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchWorkouts: () => dispatch(fetchWorkouts()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
