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
