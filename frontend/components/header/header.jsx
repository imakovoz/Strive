import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {

  return (
    <header id="main-header">
      <div className="header-div" id="left-header-div">
        <h3>STRIVE</h3>
        <h3>Search</h3>
        <h3>Dashboard Dropdown</h3>
      </div>
      <div className="header-div" id="right-header-div">
        <div class="dropdown">
          <img src="https://tinyurl.com/y8cc7jwt" height="35" width="35" class="dropbtn" />
          <div class="dropdown-content">
            <a href="#">My Profile</a>
            <button onClick={props.logout} >Logout</button>
            
          </div>
        </div>

        <h3>Add</h3>

      </div>
    </header>
  );

};

export default Header;
