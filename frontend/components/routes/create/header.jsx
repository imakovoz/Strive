import React from "react";
import { Link, withRouter } from "react-router-dom";

export default class RouteHeader extends React.Component {
  render() {
    return (
      <div id="create-routes-header">
        <div id="create-routes-top-header">
          <div>
            <Link to="/" id="logo-link">
              <h1>STRIVE</h1>
            </Link>
            <h3>Route Builder</h3>
          </div>
          <Link to="/routes" id="exit-builder">
            Exit Builder
          </Link>
        </div>
        <div id="create-routes-bottom-header">
          <div id="create-route-top-menu">
            <div>Search Bar Placeholder</div>
            <div>Undo Btn</div>
            <div>Redo Btn</div>
          </div>
          <div>
            <div onClick={this.props.openModal} id="save-route">
              Save
            </div>
          </div>
        </div>
      </div>
    );
  }
}
