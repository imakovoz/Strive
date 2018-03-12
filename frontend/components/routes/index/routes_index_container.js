import RouteIndex from "./routes_index";
import { connect } from "react-redux";
import { fetchRoutes } from "../../../actions/route_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    routes: Object.values(state.entities.routes) || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRoutes: () => dispatch(fetchRoutes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
