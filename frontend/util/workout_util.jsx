export const fetchWorkouts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/workouts',
  });
};

export const fetchFilteredWorkouts = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/workouts/filter`,
    data: {user_id}
  });
};

export const fetchWorkout = (userId, id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/workouts/${id}`,
  });
};

export const createWorkout = (userId, workout) => {
  return $.ajax({
    method: 'POST',
    url: '/api/workouts',
    data: {workout}
  });
};

export const deleteWorkout = (userId, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/workouts/${id}`,
  });
};
