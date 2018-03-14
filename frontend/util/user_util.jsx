import * as UserActions from '../actions/user_actions';

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

export const updateUser = (data, id) => {

  return $.ajax({
    url: `/api/users/${id}`,
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
