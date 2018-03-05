import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Greeting = (props) => {
  // debugger
  if (props.current_user) {
    return (
      <div>
        <h3>Welcome: { props.current_user.username }</h3>

        <button onClick={props.logout} >Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to='/signup'> Sign Up </Link>
        <Link to='/login'> Log In </Link>
      </div>
    );
  }
};

export default Greeting;
