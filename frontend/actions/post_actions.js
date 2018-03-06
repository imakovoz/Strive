import * as APIUtil from '../util/post_util';
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const fetchPosts = () => (dispatch) => (
  APIUtil.fetchPosts().then((posts) => (dispatch(receivePosts(posts))))
);

export const fetchPost = () => (dispatch) => (
  APIUtil.fetchPost().then((post) => (dispatch(receivePost(post))))
);

export const createPost = (post1) => (dispatch) => (
  APIUtil.createPost(post1).then((post) => (dispatch(receivePost(post))))
);
