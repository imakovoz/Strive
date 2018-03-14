export const fetchRoutes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/routes',
  });
};

export const fetchFilteredRoutes = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/routes/filter`,
    data: {user_id}
  });
};

export const fetchRoute = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/routes/${id}`,
  });
};

export const createRoute = (route) => {
  return $.ajax({
    method: 'POST',
    url: '/api/routes',
    data: {route}
  });
};

export const deleteRoute = (userId, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/routes/${id}`,
  });
};
