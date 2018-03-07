import { values } from 'lodash';

export const selectAllPosts = (state) => _.values(state.entities.posts);
export const selectAllUsers = (state) => _.values(state.entities.users);
