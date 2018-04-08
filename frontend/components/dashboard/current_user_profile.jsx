import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CurrentUserProfile extends React.Component {
  render() {
    return (
      <div id="current-user-dashboard">
        <Link to={`/users/${this.props.currentUser.id}`}>
          <div id="current-prof-pic-div">
            <img
              src={`${this.props.currentUser.profile_pic}`}
              height="70"
              width="70"
              id="current-prof-pic-dashboard"
            />
          </div>
        </Link>

        <h3>
          {this.props.currentUser.firstname} {this.props.currentUser.lastname}
        </h3>
      </div>
    );
  }
}

export default withRouter(CurrentUserProfile);
