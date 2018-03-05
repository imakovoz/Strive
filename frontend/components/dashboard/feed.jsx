import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Feed extends React.Component {

  componentDidMount() {

    this.props.fetchPosts();
  }

  render() {
    debugger
    let posts = this.props.posts || [];
    const allPosts = posts.map((post, i) => <li key={i}>{post.title}</li>);
    return (
      <ul>
        {allPosts}
      </ul>
    );
  }
}

export default withRouter(Feed);
