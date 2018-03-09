import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default class RouteMap extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      waypts: [],
      travelMode: 'WALKING',
      polyline: null,
      result: null,
    }

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: true,
    });

    this.placeMarkerAndPanTo = this.placeMarkerAndPanTo.bind(this);
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
    debugger
    this.directionsService.route(request, (result, status) => {
      if (status == 'OK') {
        debugger
        this.directionsDisplay.setDirections(result);
        waypts.slice(0, waypts.length).forEach(e => e.setMap(null));
        this.setState({polyline: result.routes[0].overview_path});
        this.setState({result: result})
      } else {
        alert("you done goofed: " + {status});
      }
    });
  }

  computeTotalDistance(result) {
    if (result && (result.routes[0].legs.length > 1)) {
      var total = 0;
      var myroute = result.routes[0];
      for (var i = 0; i < myroute.legs.length; i++) {
        total += myroute.legs[i].distance.value;
      }
      total = total / 1000;
      return total + ' km';
    } else {
      return 0;
    }
}

  computeTotalDuration(result) {
    if (result) {
      var total = 0;
      var myroute = result.routes[0];
      for (var i = 0; i < myroute.legs.length; i++) {
        total += myroute.legs[i].duration.value;
      }
      return total;
    } else {
      return 0;
    }
  }

  computeElevationGain(waypoints) {
    if (waypoints.length > 1) {
      return this.elevator.getElevationAlongPath({
        'path': waypoints,
        'samples': 256
      })
    } else {
      return 0;
    }
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
      debugger
      this.calcRoute(this.state.waypts);

    });
  }

  render() {
    return (
      <div>
        <Header handleSubmit={this.handleSubmit} />

        <div id='map-container' ref={map => this.mapNode = map}></div>

        <Footer distance={this.computeTotalDistance(this.state.result)}
                duration={this.computeTotalDistance(this.state.result)}
                elevation={this.computeElevationGain(this.state.waypts)}/>
      </div>
    )
  }
}
