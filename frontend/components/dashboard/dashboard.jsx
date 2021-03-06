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
            currentUser={this.props.currentUser}
            fetchPosts={this.props.fetchPosts}
            posts={this.props.posts}
            fetchUsers={this.props.fetchUsers}
            users={this.props.users}
            likes={this.props.likes}
            comments={this.props.comments}
            fetchWorkouts={this.props.fetchWorkouts}
            fetchLikes={this.props.fetchLikes}
            fetchComments={this.props.fetchComments}
            currentUser={this.props.currentUser}
            fetchFilteredPosts={this.props.fetchFilteredPosts}
            fetchFilteredWorkouts={this.props.fetchFilteredWorkouts}
            createLike={this.props.createLike}
            postComment={this.props.postComment}
            deleteComment={this.props.deleteComment}
          />
          <div id="extra-dashboard-content" />
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
