export const createLike = postable => {
  return $.ajax({
    method: "POST",
    url: `/api/likes`,
    data: { postable }
  });
};

export const fetchLikes = () => {
  return $.ajax({
    method: "GET",
    url: "/api/likes"
  });
};
