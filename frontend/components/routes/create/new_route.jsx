import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import SaveRouteModal from "./save_route_modal";
import styles from "../google_map_styling";

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

    this.calcRoute = this.calcRoute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.computeTotalDistance = this.computeTotalDistance.bind(this);
    this.computeTotalDistance = this.computeTotalDistance.bind(this);
    this.computeElevationGain = this.computeElevationGain.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
      }
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.directionsDisplay.setMap(this.map);
    this.elevator = new google.maps.ElevationService();

    this.directionsDisplay.addListener("directions_changed", () => {
      this.updateState(this.directionsDisplay.getDirections());
    });

    this.map.addListener("click", e => {
      let newMarker = new google.maps.Marker({
        position: e.latLng,
        map: this.map
      });
      this.state.markers.push(newMarker);
      this.setState({
        markers: this.state.markers,
        undo: []
      });
      newMarker = newMarker.position;
      this.calcRoute([...this.state.waypts, newMarker]);
    });
  }

  handleSubmit() {
    this.props
      .createRoute({
        workout_id: 1,
        title: "test",
        polyline: this.state.polyline,
        distance: this.state.distance,
        elevation_gain: this.state.elevation,
        estimated_duration: this.state.duration
      })
      .then(() => this.props.history.push("/routes"));
  }

  toggleModal() {
    let open = !this.state.openModal;
    this.setState({ openModal: open });
  }

  calcRoute(waypoints) {
    this.setState({ waypts: waypoints });
    let points = waypoints;
    let start = points.slice(0, 1);
    let end = points.slice(points.length - 1, points.length);
    points = points.map(el => {
      if (el.location) {
        return el.location;
      } else {
        return el;
      }
    });

    points = points.map(el => ({
      location: new google.maps.LatLng(el.lat(), el.lng()),
      stopover: false
    }));
    const routeRequest = {
      origin: start[0],
      destination: end[0],
      waypoints: points,
      travelMode: this.state.travelMode
    };
    if (points.length > 1) {
      this.directionsService.route(routeRequest, (result, status) => {
        if (status == "OK") {
          this.updateState(result);
          this.directionsDisplay.setMap(this.map);
          this.directionsDisplay.setDirections(result);
        } else {
          alert("you done goofed: " + { status });
        }
      });
    }
  }

  updateState(result) {
    const waypts = [result.request.origin].concat(
      result.request.waypoints.map(el => el.location)
    );
    this.setState({
      polyline: result.routes[0].overview_polyline,
      path: result.routes[0].overview_path,
      waypts
    });

    this.computeTotalDistance(result);
    this.computeTotalDuration(result);
    this.computeElevationGain();
    this.state.markers.forEach(e => e.setMap(null));
  }

  computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
    total = total / 1000;
    this.setState({ distance: total });
    return total + " km";
  }

  computeTotalDuration(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].duration.value;
    }
    this.setState({ duration: total });
    return total;
  }

  computeElevationGain() {
    let total = 0;

    var elevation = this.elevator.getElevationAlongPath(
      {
        path: this.state.path,
        samples: 256
      },
      (result, status) => {
        if (status == "OK") {
          for (var i = 0; i < result.length - 1; i++) {
            if (result[i].elevation < result[i + 1].elevation) {
              total += result[i + 1].elevation - result[i].elevation;
            }
          }
        }
        this.setState({ elevation: total });
        return total;
      }
    );
  }

  undo() {
    const lastwypt = this.state.waypts.pop();
    console.log(lastwypt);
    this.state.undo.push(lastwypt);
    this.setState({
      waypts: this.state.waypts,
      undo: this.state.undo
    });
    if (this.state.waypts.length > 1) {
      this.calcRoute(this.state.waypts);
    }
  }

  redo() {
    console.log(this.state.undo.length);
    const lastwypt = this.state.undo.pop();
    console.log(this.state.undo.length);
    this.state.waypts.push(lastwypt);
    this.setState({
      waypts: this.state.waypts,
      undo: this.state.undo
    });
    this.calcRoute(this.state.waypts);
  }

  render() {
    let savebtn = this.state.waypts.length > 1;
    return (
      <div id="map-builder-wrapper">
        <SaveRouteModal
          isOpen={this.state.openModal}
          onClose={this.toggleModal}
          route={this.state}
          createRoute={this.props.createRoute}
        />

        <Header
          openModal={this.toggleModal}
          savebtn={savebtn}
          undo={this.undo.bind(this)}
          redo={this.redo.bind(this)}
          waypts={this.state.waypts}
          undoArr={this.state.undo}
        />

        <div id="map-container" ref={map => (this.mapNode = map)} />

        <Footer
          distance={this.state.distance}
          duration={this.state.duration}
          elevation={this.state.elevation}
          type="Run"
        />
      </div>
    );
  }
}
