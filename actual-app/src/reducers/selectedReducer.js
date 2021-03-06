// action creators and reducers in this file deal with all the information we need
// to select a route end point (node from our map) to test, put that route's information
// on our store, make an asynchronous request to test the route, and return the results
// of that test to the store

/* ---------------CONSTANTS----------------- */

const RECEIVE_TEST_ROUTE = 'RECEIVE_TEST_ROUTE';
const SET_TEST_NODE = 'SET_TEST_NODE';
const SET_ROUTE_VERB = 'SET_ROUTE_VERB';

/* ---------------ACTION CREATORS----------------- */

export const setTestRoute = testRoute=>({
  type: RECEIVE_TEST_ROUTE,
  testRoute,
});
export const setTestNode = node=>({
  type: SET_TEST_NODE,
  node,
});
export const setRouteVerb = verb=>({
  type: SET_ROUTE_VERB,
  verb,
});

/* ---------------REDUCER----------------- */

export const selectedReducer = (state = { activeTestNode: null, testRoute: null }, action)=>{
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TEST_ROUTE:
      newState.testRoute = action.testRoute;
      break;
    case SET_TEST_NODE:
      newState.activeTestNode = action.node;
      break;
    case SET_ROUTE_VERB:
      newState.selectedRouteVerb = action.verb;
      break;
    default:
      return state;
  }
  return newState;
};
