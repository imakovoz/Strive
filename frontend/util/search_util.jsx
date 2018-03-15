export const searchUsers = (search) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search/users`,
    data: {search}
  });
};
