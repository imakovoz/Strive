import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Feed from './feed.jsx';


class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <Feed fetchPosts={this.props.fetchPosts} posts={this.props.posts}/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
