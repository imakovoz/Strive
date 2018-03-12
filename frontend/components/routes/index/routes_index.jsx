import React from "react";
import { Link, withRouter } from "react-router-dom";
import RouteItem from "./route_item";
import Header from "../../header/header_container";
import MarkerManager from "../../../util/marker_manager";

export default class RouteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    return (
      <div id="route-index-page">
        <Header />
        <div id="route-index-page-div">
          <div>
            <a>My Routes</a>
            <Link to="/routes/new">Create New Route</Link>
          </div>
          <div id="route-index-container">
            {this.props.routes.map((route, i) => (
              <RouteItem route={route} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
