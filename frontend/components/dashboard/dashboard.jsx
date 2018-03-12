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
          <CurrentUserProfile currentUser={this.props.currentUser} />
          <Feed
            fetchPosts={this.props.fetchPosts}
            posts={this.props.posts}
            fetchUsers={this.props.fetchUsers}
            users={this.props.users}
            fetchWorkouts={this.props.fetchWorkouts}
          />
          <div id="extra-dashboard-content" />
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
