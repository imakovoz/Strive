import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../../header/header_container";


export default class RouteIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRoute(this.props.id);
  }

  render() {
    return (
      <div id="route-show-page">
        <Header />
        <div>
          {this.props.route.tite}
        </div>
      </div>
    );
  }
}
