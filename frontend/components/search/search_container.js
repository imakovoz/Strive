import { searchUsers } from '../../actions/user_actions';
import Search from './search';
import { connect } from 'react-redux';
import { selectSearchedUsers } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    current_user: state.session.currentUser,
    users: selectSearchedUsers(state) || [],
    toggle: ownProps.toggle
  };
};

const mapDispatchToProps = dispatch => ({
  searchUsers: data => dispatch(searchUsers(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
