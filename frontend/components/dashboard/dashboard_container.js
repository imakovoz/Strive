import { fetchUsers } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import { selectAllPosts, selectAllUsers } from '../../reducers/selectors';
import Dashboard from './dashboard';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    posts: selectAllPosts(state),
    users: state.entities.users,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPosts: () => dispatch(fetchPosts()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
