import * as APIUtil from '../util/user_util';
import * as SearchUtil from '../util/search_util';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_SEARCHED_USERS = "RECEIVE_USERS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});
export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});
export const receiveSearchedUsers = (users) => ({
  type: RECEIVE_SEARCHED_USERS,
  users
});

export const fetchUser = (id) => (dispatch) => {
  return APIUtil.fetchUser(id).then((user) => (dispatch(receiveUser(user))));
};

export const fetchUsers = () => (dispatch) => (
  APIUtil.fetchUsers().then((users) => (dispatch(receiveUsers(users))))
);

export const updateUser = (data, id) => (dispatch) => {
  return APIUtil.updateUser(data, id).then((user) => (dispatch(receiveUser(user))));
};

export const searchUsers = (data, id) => (dispatch) => {
  return SearchUtil.searchUsers(data, id).then((users) => (dispatch(receiveSearchedUsers(users))));
};
