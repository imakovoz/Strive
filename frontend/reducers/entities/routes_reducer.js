import { merge } from "lodash";
import { RECEIVE_ROUTES, RECEIVE_ROUTE, LIMIT_ROUTES } from "../../actions/route_actions";

const routesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTES:
      return merge({}, state, action.routes);
    case RECEIVE_ROUTE:
      const payload = merge({}, state, { [action.route.id]: action.route });
      return payload;
    case LIMIT_ROUTES:
      return action.routes;
    default:
      return state;
  }
};

export default routesReducer;
