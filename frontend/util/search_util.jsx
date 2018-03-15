
export const searchUsers = (search) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search/users`,
    data: {search}
  });
};

export const searchRoutes = (search) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search/routes`,
    data: {search}
  });
};

export const searchPosts = (search) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search/posts`,
    data: {search}
  });
};

export const searchWorkouts = (search) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search/workouts`,
    data: {search}
  });
};
