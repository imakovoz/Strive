import React from "react";
import { Link, withRouter } from "react-router-dom";

export default class RouteFooter extends React.Component {
  render() {
    let time = null;
    if (this.props.duration === "--:--") {
      time = this.props.duration;
    } else {
      time =
        ("00" + Math.floor(this.props.duration / 3600)).slice(-2) +
        ":" +
        ("00" + Math.floor((this.props.duration % 3600) / 60)).slice(-2);
    }
    return (
      <div id="create-routes-footer">
        <div>
          <div className="footer-detail-div">
            <span>{this.props.type}</span>
            <div>Route Type</div>
          </div>
          <div className="footer-detail-div">
            <span>{Math.round(this.props.distance * 0.621371)}mi</span>
            <div>Distance</div>
          </div>
          <div className="footer-detail-div">
            <span>{Math.round(this.props.elevation)}ft</span>
            <div>elevation_gain</div>
          </div>
          <div className="footer-detail-div">
            <span>{time}</span>
            <div>Est Moving Time</div>
          </div>
        </div>
      </div>
    );
  }
}
