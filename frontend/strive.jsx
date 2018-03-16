import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { login, logout, signup } from "./actions/session_actions";
import { fetchUsers } from "./actions/user_actions";
import { createWorkout } from "./actions/workout_actions";
import { fetchPosts, createPost } from "./actions/post_actions";
import { fetchWorkouts } from "./actions/workout_actions";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.fetchUsers = fetchUsers;
  window.fetchPosts = fetchPosts;
  window.createPost = createPost;
  window.createWorkout = createWorkout;
  window.fetchWorkouts = fetchWorkouts;
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
