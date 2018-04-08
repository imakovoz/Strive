import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  render() {
    let search = null;
    if (this.state.searchOpen) {
      search = <SearchContainer toggle={this.toggleSearch} />;
    } else {
      search = (
        <img
          src={`${window.searchSprite}`}
          id="search-sprite"
          onClick={this.toggleSearch}
        />
      );
    }
    return (
      <header id="main-header">
        <div className="header-div" id="left-header-div">
          <Link to="/" id="logo-link">
            <h1>STRIVE</h1>
          </Link>
          {search}
          <div className="dropdown" id="dashboard-dropdown-container">
            <div id="dashboard-dropdown-div">
              <Link
                to={`/users/${this.props.current_user.id}`}
                id="dashboard-dropdown-btn"
              >
                <h3>Dashboard</h3>
              </Link>
            </div>
            <div className="dropdown-content" id="dashboard-dropdown-content">
              <Link to="/">My Activites</Link>
              <Link to="/routes">My Routes</Link>
            </div>
          </div>
        </div>
        <div className="header-div" id="right-header-div">
          <div className="dropdown">
            <Link
              to={`/users/${this.props.current_user.id}`}
              className="dropdown-header-div"
            >
              <img
                src={`${this.props.current_user.profile_pic}`}
                id="profPic"
                height="35"
                width="35"
                className="dropbtn"
              />
            </Link>
            <div className="dropdown-content">
              <Link to={`/users/${this.props.current_user.id}`}>
                My Profile
              </Link>
              <a onClick={this.props.logout}>Logout</a>
            </div>
          </div>
          <div>
            <div className="dropdown" id="header-plus-container">
              <div className="dropdown-header-div" id="header-plus-div">
                <a id="header-plus-sign">+</a>
              </div>
              <div className="dropdown-content">
                <Link to={`/posts/new`}>Create Post</Link>
                <Link to={`/workouts/new`}>Create Workout</Link>
                <Link to={`/routes/new`}>Create Route</Link>
                <Link to={`/routes/record`}>Record Route</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
