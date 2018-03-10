import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class RouteFooter extends React.Component {


  render() {
    return (
      <div id="create-routes-footer">
        <div>
          <div className="footer-detail-div">
            <span>{this.props.type}</span>
            <div>Route Type</div>
          </div>
          <div className="footer-detail-div">
            <span>{this.props.distance}mi</span>
            <div>Distance</div>
          </div>
          <div className="footer-detail-div">
            <span>{this.props.elevation}ft</span>
            <div>elevation_gain</div>
          </div>
          <div className="footer-detail-div">
            <span>{this.props.duration}</span>
            <div>Est Moving Time</div>
          </div>
        </div>
      </div>
    );
  }
}
