import { fetchUser, fetchUsers } from '../../actions/user_actions';
import ProfilePage from './profile_page';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    current_user: state.session.currentUser,
    profile_id: ownProps.match.params.id,
    user_profile: state.entities.users[ownProps.match.params.id],
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
