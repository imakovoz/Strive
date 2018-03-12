import React from "react";
import { Link, withRouter } from "react-router-dom";
import PostItem from "./post_item";

class Feed extends React.Component {
  componentDidMount() {
    this.props
      .fetchUsers()
      .then(() => this.props.fetchPosts())
      .then(() => this.props.fetchWorkouts());
  }

  render() {
    let posts = this.props.posts;
    let users = this.props.users;

    console.log(users);

    return (
      <div id="feed-container-div">
        <ul>
          {this.props.posts.map((post, i) => {
            return (
              <PostItem
                post={post}
                user={this.props.users[post.user_id]}
                key={i}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Feed);
