import * as APIUtil from '../util/workout_util';
export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";
export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";

export const receiveWorkouts = (workouts) => ({
  type: RECEIVE_WORKOUTS,
  workouts
});

export const receiveWorkout = (workout) => ({
  type: RECEIVE_WORKOUT,
  workout
});

export const fetchWorkouts = () => (dispatch) => (
  APIUtil.fetchWorkouts().then((workouts) => (dispatch(receiveWorkouts(workouts))))
);

export const fetchWorkout = (userId, id) => (dispatch) => (
  APIUtil.fetchWorkout(userId, id).then((workout) => (dispatch(receiveWorkout(workout))))
);

export const createWorkout = (userId, workout1) => (dispatch) => (
  APIUtil.createWorkout(userId, workout1).then((workout) => (dispatch(receiveWorkout(workout))))
);
