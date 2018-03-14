import NewRoute from './new_route';
import { connect } from 'react-redux';
import { createRoute } from '../../../actions/route_actions';

const mapStateToProps = (state, ownProps) => {
  let route = state.entities.routes[ownProps.id];
  
  return ({
    users: state.entities.users,
    route: state.entities.routes[ownProps.id]
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRoute: (route) => dispatch(createRoute(route))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NewRoute);
