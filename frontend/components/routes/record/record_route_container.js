import RecordRoute from './record_route';
import { connect } from 'react-redux';
import { createRoute } from '../../../actions/route_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    users: state.entities.users,
    route: {
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
    }
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRoute: (route) => dispatch(createRoute(route))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RecordRoute);
