import { merge } from 'lodash';
import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT, LIMIT_WORKOUTS } from "../../actions/workout_actions";


const workoutsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WORKOUTS:
      return merge({}, state, action.workouts);
    case RECEIVE_WORKOUT:
      return merge({}, state, {[action.workout.id]: action.workout});
    case LIMIT_WORKOUTS:
      return action.workouts;
    default:
      return state;
  }
};

export default workoutsReducer;
