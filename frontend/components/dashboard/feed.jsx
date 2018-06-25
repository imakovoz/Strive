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
                post={post}
                user={this.props.users[post.user_id]}
                likes={this.props.likes}
                key={i}
                createLike={this.props.createLike}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Feed);
