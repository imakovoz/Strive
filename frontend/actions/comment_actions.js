import * as APIUtil from "../util/comment_util";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const fetchComments = () => dispatch =>
  APIUtil.fetchComments().then(comments => dispatch(receiveComments(comments)));

export const createComment = comment => dispatch =>
  APIUtil.createComment(comment).then(comments =>
    dispatch(receiveComments(comments))
  );
