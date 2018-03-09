import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class RouteHeader extends React.Component {


  render() {
    return (
      <div id="create-routes-header">
        <div>
          <span>STRIVE</span>
          <Link to="/routes">Exit Builder</Link>
        </div>
        <div>
          <div>Search Bar Placeholder</div>
          <div>Undo Btn</div>
          <div>Redo Btn</div>
          <div onClick={this.props.handleSubmit}>Save route</div>
        </div>
      </div>
    )
  }
}
