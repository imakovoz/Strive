import * as APIUtil from "../util/like_util";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

export const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

export const fetchLikes = () => dispatch =>
  APIUtil.fetchLikes().then(likes => dispatch(receiveLikes(likes)));

export const createLike = like => dispatch =>
  APIUtil.createLike(like).then(likes => dispatch(receiveLikes(likes)));
