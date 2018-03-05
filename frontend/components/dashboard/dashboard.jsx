import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Feed from './feed.jsx';
import Header from '../header/header_container.js';


class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <h2>Activity Feed</h2>
        <Feed fetchPosts={this.props.fetchPosts} posts={this.props.posts}/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
