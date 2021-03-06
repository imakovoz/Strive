export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts',
  });
};

export const fetchFilteredPosts = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/filter/posts`,
    data: {user_id}
  });
};

export const fetchPost = (userId, id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/posts/${id}`,
  });
};

export const createPost = (userId, post) => {
  return $.ajax({
    method: 'POST',
    url: `/api/posts`,
    data: {post}
  });
};

export const updatePost = (userId, post) => {
  return $.ajax({
    method: `PATCH`,
    url: `/api/users/${userId}/posts/${post.id}`,
    data: {post}
  });
};

export const deletePost = (userId, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/posts/${id}`,
  });
};
