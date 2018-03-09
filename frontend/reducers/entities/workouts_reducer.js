import { merge } from 'lodash';
import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT } from "../../actions/workout_actions";


const usersReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WORKOUTS:
      return merge({}, state, action.workouts);
    case RECEIVE_WORKOUT:
      return merge({}, state, {[action.workout.id]: action.workout});
    default:
      return state;
  }
};

export default usersReducer;
