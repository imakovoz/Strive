import * as APIUtil from '../util/routes_util';
export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";

export const receiveRoutes = (routes) => ({
  type: RECEIVE_ROUTES,
  routes
});

export const receiveRoute = (route) => ({
  type: RECEIVE_ROUTE,
  route
});

export const fetchRoutes = () => (dispatch) => (
  APIUtil.fetchRoutes().then((routes) => (dispatch(receiveRoutes(routes))))
);

export const fetchRoute = (userId, id) => (dispatch) => (
  APIUtil.fetchRoute(userId, id).then((route) => (dispatch(receiveRoute(route))))
);

export const createRoute = (route1) => (dispatch) => (
  APIUtil.createRoute(route1).then((route) => (dispatch(receiveRoute(route))))
);

export const updateRoute = (route1) => (dispatch) => (
  APIUtil.updateRoute(route1).then((route) => (dispatch(receiveRoute(route))))
);