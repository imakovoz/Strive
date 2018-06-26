export const createComment = (post, comment) => {
  return $.ajax({
    method: "POST",
    url: `/api/comments`,
    data: { post, comment }
  });
};

export const fetchComments = () => {
  return $.ajax({
    method: "GET",
    url: "/api/comments"
  });
};

export const deleteComment = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`
  });
};
