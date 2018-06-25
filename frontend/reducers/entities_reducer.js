import { merge } from "lodash";
import { combineReducers } from "redux";
import users from "./entities/users_reducer";
import posts from "./entities/posts_reducer";
import routes from "./entities/routes_reducer";
import workouts from "./entities/workouts_reducer";
import likes from "./entities/likes_reducer";

const entitiesReducer = combineReducers({
  users,
  posts,
  workouts,
  routes,
  likes
});

export default entitiesReducer;
