import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Greeting = (props) => {

  return (
    <div>
      <h3>Welcome: { props.current_user.email }</h3>

      <button onClick={props.logout} >Logout</button>
    </div>
  );

};

export default Greeting;
