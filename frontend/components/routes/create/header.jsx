import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    let undoBtn = null;
    if (this.props.waypts.length > 1) {
      undoBtn = (
        <div
          onClick={this.props.undo}
          id="rte-undo-endabled"
          className="action-btn-header-rte"
        >
          <img src={`${window.undo}`} height="20" width="20" />
          <span>Undo</span>
        </div>
      );
    } else {
      undoBtn = (
        <div id="rte-undo-disabled" className="action-btn-header-rte">
          <img src={`${window.undo}`} height="20" width="20" />
          <span>Undo</span>
        </div>
      );
    }

    let redo = null;
    if (this.props.undoArr.length > 0) {
      redo = (
        <div
          onClick={this.props.redo}
          id="rte-redo-endabled"
          className="action-btn-header-rte"
        >
          <img src={`${window.redo}`} height="20" width="20" />
          <span>Redo</span>
        </div>
      );
    } else {
      redo = (
        <div id="rte-redo-disabled" className="action-btn-header-rte">
          <img src={`${window.redo}`} height="20" width="20" />
          <span>Redo</span>
        </div>
      );
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
            {undoBtn}
            {redo}
          </div>
          <div>{savebtn}</div>
        </div>
      </div>
    );
  }
}
