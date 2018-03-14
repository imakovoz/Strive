export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
  });
};

export const updateUser = (data) => {

  return $.ajax({
    url: '/api/users',
    type: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: data,
    success: function(user) {
      UserActions.receiveUser(user);
    }
  });
};
