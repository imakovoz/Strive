import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../../header/header_container";
import Footer from './footer';
import styles from '../google_map_styling';

export default class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waypts: [],
      travelMode: "WALKING",
      polyline: null,
      markers: [],
      recording: false,
      loading: null,
    };
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: true
    });
  }

  componentDidMount() {
    this.initMap();
  }

  initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.setState({center: pos});
      });
    } else {
      this.setState({center: { lat: 40.751282, lng: -73.98399 }});
    }
    let mapOptions = {
      center: { lat: 40.751282, lng: -73.98399 },
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true,
      styles: styles.strive,
      zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
    };

    if (this.state.center) {
      mapOptions[center] = this.state.center;
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  record() {
    this.setState({loading: "loading"}, () => {if (navigator.geolocation) {
      this.timer = setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          const waypts = this.state.waypts.slice();
          waypts.push(pos);
          this.setState({waypts, recording: true, loading: null}, this.setPath.bind(this));
        });
      }, 2000);
    }});
  }

  setPath() {
    const routePath = new google.maps.Polyline({
      path: this.state.waypts,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    routePath.setMap(this.map);
    const startIcon = {
      url: window.start,
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 10)
    };
    const endIcon = {
      url: window.end,
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 10)
    };
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
    if (this.state.markers.length === 0) {
      const markers = this.state.markers.slice();
      let marker = new google.maps.Marker({
              position: this.state.waypts[this.state.waypts.length - 1],
              icon: startIcon,
              map: this.map,
              shape: shape,
              zIndex: 1
            });
      markers.push(marker);
      this.setState({markers});
    } else if (this.state.markers.length === 1) {
      const markers = this.state.markers.slice();
      let marker = new google.maps.Marker({
        position: this.state.waypts[this.state.waypts.length - 1],
        icon: endIcon,
        map: this.map,
        shape: shape,
        zIndex: 1
      });
      markers.push(marker);
      this.setState({markers});
    } else {
      this.state.markers[1].setMap(null);
      const markers = this.state.markers.slice(0, 1);
      let marker = new google.maps.Marker({
        position: this.state.waypts[this.state.waypts.length - 1],
        icon: endIcon,
        map: this.map,
        shape: shape,
        zIndex: 1
      });
      markers.push(marker);
      this.setState({markers});
    }

  }

  stop() {
    this.setState({recording: false}, clearInterval(this.timer));
  }

  render() {
    let btn = null;
    if (this.state.loading === "loading") {
      btn = <div className="record-route-btn">Loading</div>;
    } else if (this.state.recording) {
      btn = <div onClick={this.stop.bind(this)} className="record-route-btn" id="stop-record">Stop Recording</div>;
    } else {
      btn = <div onClick={this.record.bind(this)} className="record-route-btn" id="start-record">Start Recording</div>;
    }
    return (
      <div id="map-record-wrapper">
        <Header />
        <div id="record-map-container">
          <div id="map-container" ref={map => (this.mapNode = map)} />
          { btn }
          <Footer type="Run" distance="" elevation="" duration="--:--"/>
        </div>
      </div>
    );
  }
}
