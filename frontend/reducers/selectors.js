import { values } from 'lodash';

export const selectAllPosts = (state) => _.values(state.entities.posts);

export const selectAllFeedItems = (state) => Array.prototype.concat(
  _.values(state.entities.posts), _.values(state.entities.workouts)).sort(compare);
  
export const selectAllUsers = (state) => _.values(state.entities.users);


const compare = (a, b) => {
  if (a.created_at > b.created_at)
    return -1;
  if (a.created_at < b.created_at)
    return 1;
  return 0;
};
