export const fetchRoutes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/routes',
  });
};

export const fetchRoute = (userId, id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/routes/${id}`,
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
