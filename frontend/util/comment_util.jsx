export const createComment = commentable => {
  return $.ajax({
    method: "POST",
    url: `/api/comments`,
    data: { commentable }
  });
};

export const fetchComments = () => {
  return $.ajax({
    method: "GET",
    url: "/api/comments"
  });
};
