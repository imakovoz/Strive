import { login } from '../../actions/session_actions';
import { createWorkout } from '../../actions/workout_actions';
import WorkoutForm from './workout_form';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const today = new Date(Date.now());
  return ({
    current_user: state.session.currentUser,
    workout: {
      title: 'Casual Run',
      body: '',
      distance: '',
      distance_uom: 'miles',
      hours: '01',
      minutes: '00',
      seconds: '00',
      elevation: '',
      elevation_uom: 'feet',
      date: today,
      time: today,
      activity: 'Run',
      subactivity: '',
    },
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    action: (userId, workout) => dispatch(createWorkout(userId, workout)),

  });
};


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);
