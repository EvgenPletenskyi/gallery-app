import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import combineReducers from './reducers/index';

const initalState = {};

const middleware = [thunk];

const store = createStore(
  combineReducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
