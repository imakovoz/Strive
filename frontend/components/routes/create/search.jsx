import React from "react";
import { Link, withRouter } from "react-router-dom";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this)
  }

  componentDidMount() {
    var input = document.getElementById('pac-input');
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.updateSearch);
  }

  updateSearch(){
    // var input = document.getElementById('pac-input');
    // var searchBox = new google.maps.places.SearchBox(input);
    var places = this.searchBox.getPlaces();
    debugger
    if (places.length == 0) {
      return;
    }

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    this.props.map.fitBounds(bounds);
  }

  render() {

    return (
      <input id="pac-input" className="controls" type="text" placeholder="Search Box"></input>
    );
  }
}
