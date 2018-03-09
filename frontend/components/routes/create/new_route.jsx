import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../header/header_container';
import MarkerManager from '../../../util/marker_manager';

export default class RouteMap extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      waypts: [],
      travelMode: 'WALKING',
      polyline: null,
    }

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: true,
    });

    this.placeMarkerAndPanTo = this.placeMarkerAndPanTo.bind(this);
    this.calcRoute = this.calcRoute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.initMap();
  }

  handleSubmit() {
    debugger
    this.props.createRoute({
      workout_id: 1,
      title: "test",
      polyline: this.state.polyline,
    })
  }

  placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    map.panTo(latLng);
  }

  calcRoute(waypts) {
    let points = waypts.map(el => el.position)
    let saved_route = new google.maps.Polyline({
      path: points,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    })
    let start = points.splice(0, 1);
    let end = points.splice(points.length - 1, points.length);
    points = points.map(el => ({location: el, stopover: false}));

    let request = {
      origin: start[0],
      destination: end[0],
      waypoints: points,
      travelMode: this.state.travelMode,
    };
    this.directionsService.route(request, (result, status) => {
      if (status == 'OK') {
        this.directionsDisplay.setDirections(result);
        waypts.slice(0, waypts.length).forEach(e => e.setMap(null));
        this.state.polyline = result.routes[0].overview_path;
      } else {
        alert("you done goofed: " + {status});
      }
    });
  }

  initMap() {

    const mapOptions = {
      center: { lat: 40.751282, lng: -73.983990 },
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.directionsDisplay.setMap(this.map);

    this.map.addListener('click', (e) => {
      this.state.waypts.push(new google.maps.Marker({
        position: e.latLng,
        map: this.map
      }))


      this.calcRoute(this.state.waypts);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div id='map-container' ref={map => this.mapNode = map}></div>
        <div onClick={this.handleSubmit}>Save route</div>
      </div>
    )
  }
}
