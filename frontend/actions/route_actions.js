import * as APIUtil from '../util/routes_util';
export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const LIMIT_ROUTES = "LIMIT_ROUTES";

export const receiveRoutes = (routes) => ({
  type: RECEIVE_ROUTES,
  routes
});

export const receiveRoute = (route) => {
return {
  type: RECEIVE_ROUTE,
  route
};
};

export const limitRoutes = (routes) => ({
  type: LIMIT_ROUTES,
  routes
});

export const fetchRoutes = () => (dispatch) => (
  APIUtil.fetchRoutes().then((routes) => (dispatch(receiveRoutes(routes))))
);

export const fetchFilteredRoutes = (user_ids) => (dispatch) => {
  return APIUtil.fetchFilteredRoutes(user_ids).then((routes) => (dispatch(limitRoutes(routes))));
};

export const fetchRoute = (id) => (dispatch) => {
  return APIUtil.fetchRoute(id).then(
    (route) => {
      return dispatch(receiveRoute(route));
    }
  );
};

export const createRoute = (route1) => (dispatch) => (
  APIUtil.createRoute(route1).then((route) => (dispatch(receiveRoute(route))))
);

export const updateRoute = (route1) => (dispatch) => (
  APIUtil.updateRoute(route1).then((route) => (dispatch(receiveRoute(route))))
);
