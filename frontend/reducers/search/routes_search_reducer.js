import { merge } from 'lodash';
import { RECEIVE_SEARCHED_ROUTES } from "../../actions/route_actions";


const routesSearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCHED_ROUTES:
      return action.routes;
    default:
      return state;
  }
};

export default routesSearchReducer;
