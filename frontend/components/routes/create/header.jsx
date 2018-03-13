import React from "react";
import { Link, withRouter } from "react-router-dom";

export default class RouteHeader extends React.Component {
  render() {
    let savebtn = null;
    if (this.props.savebtn) {
      savebtn = (
        <div onClick={this.props.openModal} id="save-route">
          Save
        </div>
      );
    } else {
      savebtn = <div id="disabled-save-route">Save</div>;
    }
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
            {savebtn}
          </div>
        </div>
      </div>
    );
  }
}
