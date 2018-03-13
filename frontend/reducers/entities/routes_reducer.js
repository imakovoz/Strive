import { merge } from "lodash";
import { RECEIVE_ROUTES, RECEIVE_ROUTE } from "../../actions/route_actions";

const usersReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTES:
      return merge({}, state, action.routes);
    case RECEIVE_ROUTE:
      const payload = merge({}, state, { [action.route.id]: action.route });
      return payload;
    default:
      return state;
  }
};

export default usersReducer;
