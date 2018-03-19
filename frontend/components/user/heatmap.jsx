import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../header/header_container';
import UpdateProfileModal from './update_profile_modal';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      routes: this.props.routes
    };
  }

  componentDidMount() {
    this.initMap();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routes !== this.state.routes) {
      this.setState({ routes: nextProps.routes });
      let data = this.getPoints.bind(this)();
      this.heatmap = new google.maps.visualization.HeatmapLayer({
        data,
        map: this.map
      });
    }
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

  getPoints() {
    const result = [];
    this.props.routes.map(route => {
      let poly = google.maps.geometry.encoding.decodepath(route.polyline);
    });
  }

  render() {
    return (
      <div id="map-container" ref={map => (this.mapNode = map)} id="heatmap" />
    );
  }
}

export default withRouter(ProfilePage);
