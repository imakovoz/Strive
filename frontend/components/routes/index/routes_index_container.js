import RouteIndex from "./routes_index";
import { connect } from "react-redux";
import { fetchRoutes, fetchFilteredRoutes } from "../../../actions/route_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    routes: Object.values(state.entities.routes) || [],
    currentUser: state.session.currentUser.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFilteredRoutes: (user_id) => dispatch(fetchFilteredRoutes(user_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
