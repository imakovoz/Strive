import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Feed from './feed.jsx';
import Header from '../header/header_container.js';


class Dashboard extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    debugger
    return (
      <div>
        <Header />
        <h2>Activity Feed</h2>
      <Feed fetchPosts={this.props.fetchPosts} posts={this.props.posts}
        fetchUsers={this.props.fetchUsers} users={this.props.users}/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
