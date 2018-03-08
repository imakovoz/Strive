import { login } from '../../actions/session_actions';
import { updateWorkout, fetchWorkout } from '../../actions/workout_actions';
import WorkoutShow from './workout_show';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    current_user: state.session.currentUser,
    workoutId: ownProps.match.params.workout_id,
    workout: state.entities.posts[ownProps.match.params.workout_id] || {},
    userId: ownProps.match.params.user_id,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    updateWorkout: (userId, workout) => dispatch(updateWorkout(userId, workout)),
    fetchWorkout: (userId, workout) => dispatch(fetchWorkout(userId, workout))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow);
