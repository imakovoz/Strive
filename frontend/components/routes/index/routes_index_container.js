import RouteIndex from './routes_index';
import { connect } from 'react-redux';
import { createRoute } from '../../../actions/route_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    users: state.entities.users,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRoute: (route) => dispatch(createRoute(route))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
