import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  // TODO make img locally hosted

  return (
    <header id="main-header">
      <div className="header-div" id="left-header-div">
        <Link to="/" id="logo-link">
          <h1>STRIVE</h1>
        </Link>
        <h3>Search</h3>
        <h3>Dashboard Dropdown</h3>
      </div>
      <div className="header-div" id="right-header-div">
        <div className="dropdown">
          <Link to={`/users/${props.current_user.id}`} className="dropdown-icons">
            <img src="https://tinyurl.com/y8cc7jwt" height="35" width="35" className="dropbtn" />
          </Link>
          <div className="dropdown-content">
            <Link to={`/users/${props.current_user.id}`}>My Profile</Link>
            <a onClick={props.logout} >Logout</a>
          </div>
        </div>
        <div>
          <div className="dropdown">
            <img src="https://tinyurl.com/y8pwomlj" height="35" width="35" className="dropbtn" />
            <div className="dropdown-content">
              <Link to={`/posts/new`}>Create Post</Link>
              <Link to={`/workouts/new`}>Create Workout</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

};

export default Header;
