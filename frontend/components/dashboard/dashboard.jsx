import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Feed from './feed';
import Header from '../header/header_container.js';


class Dashboard extends React.Component {

  componentDidMount() {

  }
  render() {
    debugger
    return (
      <div>
        <Header />
        <h2>Activity Feed</h2>
      <Feed fetchPosts={this.props.fetchPosts} posts={this.props.posts}
        fetchUsers={this.props.fetchUsers} users={this.props.users}
        fetchWorkouts={this.props.fetchWorkouts}/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
