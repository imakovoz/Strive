import React from "react";
import { Link, withRouter } from "react-router-dom";
import Feed from "./feed";
import Header from "../header/header_container.js";
import CurrentUserProfile from "./current_user_profile";

class Dashboard extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Header />
        <div id="dashboard-container-div">
          <CurrentUserProfile
            currentUser={this.props.currentUser}
            post={this.props.post}
            workout={this.props.workout}
            fetchFilteredWorkouts={this.props.fetchFilteredWorkouts}
            fetchFilteredPosts={this.props.fetchFilteredPosts}
          />
          <Feed
            fetchPosts={this.props.fetchPosts}
            posts={this.props.posts}
            fetchUsers={this.props.fetchUsers}
            users={this.props.users}
            likes={this.props.likes}
            fetchWorkouts={this.props.fetchWorkouts}
            fetchLikes={this.props.fetchLikes}
            currentUser={this.props.currentUser}
            fetchFilteredPosts={this.props.fetchFilteredPosts}
            fetchFilteredWorkouts={this.props.fetchFilteredWorkouts}
            createLike={this.props.createLike}
          />
          <div id="extra-dashboard-content" />
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
