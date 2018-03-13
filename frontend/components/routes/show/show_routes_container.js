import RouteShow from "./show_route";
import { connect } from "react-redux";
import { fetchRoute } from "../../../actions/route_actions";
import { fetchUser } from "../../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    route: state.entities.routes[ownProps.match.params.id] || {},
    id: ownProps.match.params.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRoute: (id) => dispatch(fetchRoute(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);
