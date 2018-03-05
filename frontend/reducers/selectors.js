import { values } from 'lodash';

export const selectAllPosts = (state) => _.values(state.entities.posts);
