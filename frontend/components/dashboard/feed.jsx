import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostItem from './post_item';

class Feed extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  render() {

    let posts = this.props.posts;
    let users = this.props.users;
    // debugger
    if (posts.length >0) {
      return (
        <ul>
          {this.props.posts.map((post, i) => <PostItem post={post}
            user={this.props.users[post.id]} key={i}/>)}
        </ul>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(Feed);
