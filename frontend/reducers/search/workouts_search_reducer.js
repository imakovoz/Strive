import { merge } from 'lodash';
import { RECEIVE_SEARCHED_WORKOUTS } from "../../actions/workout_actions";


const workoutsSearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCHED_WORKOUTS:
      return action.workouts;
    default:
      return state;
  }
};

export default workoutsSearchReducer;
