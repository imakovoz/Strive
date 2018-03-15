import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../../header/header_container";
import styles from '../google_map_styling';

export default class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waypts: [],
      travelMode: "WALKING",
      polyline: null,
      result: null,
      duration: "--:--",
      distance: "",
      elevation: 0,
      path: null,
      markers: [],
      undo: [],
      redo: [],
      openModal: false
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

    const mapOptions = {
      center: { lat: 40.751282, lng: -73.98399 },
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true,
      styles: styles.strive,
      zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos);
        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent('Location found.');
        this.infoWindow.open(this.map);
        this.map.setCenter(pos);
      });
    }
  }

  render() {
    return (
      <div id="map-record-wrapper">
        <Header />
        {this.state.waypts.map((el, i) => {
          return <div>{el}</div>;
        })}
        <div id="record-map-container">
          <div id="map-container" ref={map => (this.mapNode = map)} />
        </div>
      </div>
    );
  }
}
