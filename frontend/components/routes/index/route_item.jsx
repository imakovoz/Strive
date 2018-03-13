import React from "react";
import { Link, withRouter } from "react-router-dom";
import { style, key, rectangle } from '../google_static_map_styling';

export default class RouteItem extends React.Component {
  constructor(props) {
    super(props);
    this.url = rectangle + style + "&path=color:0xff0000ff|weight:2%7Cenc:" + props.route.polyline + key;
  }



  render() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = null;
    let month = null;
    let day = null;
    this.props.route.created_at.split('-').map((el, i) => {
      if (i === 0) {
        year = el;
      } else if (i === 1) {
        month = months[el - 1];
      } else {
        day = el.split('T')[0];
      }
    });
    let time = `${month} ${day}, ${year}`;

    let duration = null;
    if (this.props.route.estimated_duration === "--:--") {
      duration = this.props.route.estimated_duration;
    } else {
      duration =
        ("00" + Math.floor(this.props.route.estimated_duration / 3600)).slice(-2) +
        ":" +
        ("00" + Math.floor((this.props.route.estimated_duration % 3600) / 60)).slice(-2);
    }

    return (
      <div id="map-index-wrapper">
        <img src={ this.url } className="map-index-item" />
        <div id="route-index-detail-wrapper">
          <div id="route-index-item-title-div">
            <Link to={`/routes/${this.props.route.id}`}
                  id="route-index-item-title">
                  {this.props.route.title}
            </Link>
          </div>
          <div id="route-index-item-details">
            <div>
              <span>{this.props.route.distance} mi</span>
              <label>Distance</label>
            </div>
            <div>
              <span>{this.props.route.elevation_gain} ft</span>
              <label>Elevation Gain</label>
            </div>
          </div>
          <div id="route-index-detail-moving-time">
            <label>Est. Moving Time</label>
            <span>{duration}</span>
          </div>
        </div>
        <div id="route-index-time-created">Created on {time}</div>
      </div>
    );
  }
}
