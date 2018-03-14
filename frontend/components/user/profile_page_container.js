import { fetchUser, fetchUsers, updateUser } from '../../actions/user_actions';
import { fetchFilteredWorkouts } from '../../actions/workout_actions';
import { styleWorkoutsForVisualization } from '../../reducers/selectors';
import ProfilePage from './profile_page';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    current_user: state.session.currentUser,
    profile_id: ownProps.match.params.id,
    user_profile: state.entities.users[ownProps.match.params.id] || {},
    workouts: state.entities.workouts || {},
    styleWorkoutsForVisualization: styleWorkoutsForVisualization,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFilteredWorkouts: (id) => dispatch(fetchFilteredWorkouts(id)),
    updateUser: (data) => dispatch(updateUser(data)),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
