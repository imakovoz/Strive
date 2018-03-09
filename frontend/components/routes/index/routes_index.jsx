import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RouteItem from './route_item';
import Header from '../../header/header_container';
import MarkerManager from '../../../util/marker_manager';

export default class RouteMap extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      waypts: [],
      travelMode: 'DRIVING',
      polyline: new google.maps.Polyline
    }

  }

  componentDidMount(){
    this.initMap();
    this.MarkerManager = new MarkerManager(this.map);
  }

  initMap() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions)

  }



  render() {
    return (
      <div>
        <Header />
        <div id='map-container' ref={map => this.mapNode = map}></div>
      </div>
    )
  }
}
