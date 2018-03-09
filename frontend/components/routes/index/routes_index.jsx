import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RouteItem from './route_item';
import Header from '../../header/header_container';
import MarkerManager from '../../../util/marker_manager';

export default class RouteIndex extends React.Component {

  constructor(props){
    super(props)

  }

  render() {
    return (
      <div>
        <Header />
        <Link to="/routes/new">Create</Link>
      </div>
    )
  }
}
