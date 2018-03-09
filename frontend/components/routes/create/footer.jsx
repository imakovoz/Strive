import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class RouteFooter extends React.Component {


  render() {
    return (
      <div id="create-routes-footer">
        <div>Route Type</div>
        <div>Distance: {this.props.distance}</div>
        <div>elevation_gain</div>
        <div>Est Moving Time</div>
      </div>
    )
  }
}
