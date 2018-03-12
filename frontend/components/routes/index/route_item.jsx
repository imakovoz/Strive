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
    return (
      <div id="map-index-wrapper">
        <div id="map-index-item" ref={map => (this.mapNode = map)} />
        <div>
          <div className="route-index-item-title">{this.props.route.title}</div>
          <div className="route-index-item-details">
            <div>
              <span>{this.props.route.distance}</span>
              <label>Distance</label>
            </div>
            <div>
              <span>{this.props.route.elevation_gain}</span>
              <label>Elevation Gain</label>
            </div>
          </div>
          <div>
            <label>Est. Moving Time</label>
            <span>{this.props.route.estimated_duration}</span>
          </div>
          <div>{this.props.route.created_at}</div>
        </div>
      </div>
    );
  }
}
