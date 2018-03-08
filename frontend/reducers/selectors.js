import { values } from 'lodash';

export const selectAllPosts = (state) => _.values(state.entities.posts);
export const selectAllFeedItems = (state) => Array.prototype.concat(
  _.values(state.entities.posts), _.values(state.entities.workouts));
export const selectAllUsers = (state) => _.values(state.entities.users);
