import React from "react";
import { Link, withRouter } from "react-router-dom";

export default class RouteItem extends React.Component {
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const mapOptions = {
      center: { lat: 40.751282, lng: -73.98399 },
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
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
        <div id="map-index-item" ref={map => (this.mapNode = map)} />
        <div id="route-index-detail-wrapper">
          <div id="route-index-item-title-div">
            <Link to={`/routes/${this.props.route.id}`} id="route-index-item-title">
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
