import * as APIUtil from '../util/session_api_util';
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUsers = () => (dispatch) => (
  APIUtil.fetchUsers().then((users) => (dispatch(receiveUsers(users))))
);
