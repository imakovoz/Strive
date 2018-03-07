import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../header/header_container';


class ProfilePage extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.profile_id);
  }

  render() {
    if (this.props.user_profile) {
      return (
        <div >
          <Header />
          <ul>
            <li>{this.props.user_profile.firstname}</li>
            <li>{this.props.user_profile.lastname}</li>
            <li>{this.props.user_profile.email}</li>
            <li>{this.props.user_profile.prof_pic_id}</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default withRouter(ProfilePage);
