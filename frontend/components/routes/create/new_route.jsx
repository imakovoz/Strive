import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default class RouteMap extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      waypts: [],
      travelMode: 'WALKING',
      polyline: null,
      result: null,
      duration: 0,
      path: null,
    };

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: true,
    });

    this.calcRoute = this.calcRoute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.computeTotalDistance = this.computeTotalDistance.bind(this);
    this.computeTotalDistance = this.computeTotalDistance.bind(this);
    this.computeElevationGain = this.computeElevationGain.bind(this);
  }

  componentDidMount(){
    this.initMap();
  }

  handleSubmit() {
    this.props.createRoute({
      workout_id: 1,
      title: "test",
      polyline: this.state.polyline,
    });
  }

  calcRoute() {
    let points = this.state.waypts.map(el => el.position);
    let start = points.slice(0, 1);
    let end = points.slice(points.length - 1, points.length);
    points = points.map(el => ({location: new google.maps.LatLng(el.lat(), el.lng()), stopover: false}));
    const routeRequest = {
      origin: start[0],
      destination: end[0],
      waypoints: points.slice(1, -1),
      travelMode: this.state.travelMode,
    };

    if (points.length > 1) {

      this.directionsService.route(routeRequest, (result, status) => {

        if (status == 'OK') {
          this.computeTotalDistance(result);
          this.computeTotalDuration(result);
          this.computeElevationGain();
          this.directionsDisplay.setMap(this.map);
          this.directionsDisplay.setDirections(result);
          this.state.waypts.slice(0, this.state.waypts.length).forEach(e => e.setMap(null));


        } else {
          alert("you done goofed: " + {status});
        }
      });
    }
  }


  computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
    total = total / 1000;
    this.setState({distance: total});
    return total + ' km';
  }

  computeTotalDuration(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].duration.value;
    }
    this.setState({duration: total});
    return total;
  }

  computeElevationGain() {
    let total = 0;
    var elevation = this.elevator.getElevationAlongPath({
      'path': this.state.waypts.map(pt => pt.position),
      'samples': 256
    }, (result, status) => {
      if (status == 'OK'){
        for (var i = 0; i < result.length - 1; i++) {
          if (result[i].elevation < result[i + 1].elevation) {
            total += result[i + 1].elevation - result[i].elevation;
          }
        }
      }
      this.setState({elevation: total});
      return total;
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
    this.elevator = new google.maps.ElevationService;

    this.map.addListener('click', (e) => {
      const newMarker = new google.maps.Marker({
        position: e.latLng,
        map: this.map
      });

      this.setState({ waypts: [...this.state.waypts, newMarker] });
      this.calcRoute();

    });
  }

  render() {
    return (
      <div>
        <Header handleSubmit={this.handleSubmit} />

        <div id='map-container' ref={map => this.mapNode = map}></div>

      <Footer distance={this.state.distance}
              duration={this.state.duration}
              elevation={this.state.elevation}/>
      </div>
    )
  }
}
