import React from "react";
import { Link, withRouter } from "react-router-dom";
import PostItem from "./post_item";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.props
      .fetchUsers()
      .then(() => this.props.fetchPosts())
      .then(() => this.props.fetchWorkouts())
      .then(() => this.props.fetchComments())
      .then(() => this.props.fetchLikes());
  }

  toggle(e) {
    this.setState({ toggle: !this.state.toggle }, () => {
      if (this.state.toggle == false) {
        this.props
          .fetchFilteredPosts([this.props.currentUser.id])
          .then(() =>
            this.props.fetchFilteredWorkouts([this.props.currentUser.id])
          );
      } else {
        this.props.fetchPosts().then(() => this.props.fetchWorkouts());
      }
    });
  }

  render() {
    let posts = this.props.posts;
    let users = this.props.users;

    let toggle = null;
    if (this.state.toggle) {
      toggle = (
        <div id="feed-toggle" onClick={this.toggle}>
          Following ⌄
        </div>
      );
    } else {
      toggle = (
        <div id="feed-toggle" onClick={this.toggle}>
          Your Activities ⌄
        </div>
      );
    }

    return (
      <div id="feed-container-div">
        <div>{toggle}</div>
        <ul>
          {this.props.posts.map((post, i) => {
            return (
              <PostItem
                currentUser={this.props.currentUser}
                post={post}
                user={this.props.users[post.user_id]}
                users={this.props.users}
                likes={this.props.likes}
                comments={this.props.comments}
                keyVal={i}
                createLike={this.props.createLike}
                postComment={this.props.postComment}
                deleteComment={this.props.deleteComment}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Feed);
