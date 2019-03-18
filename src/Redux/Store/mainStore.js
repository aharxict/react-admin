import { createStore, applyMiddleware, compose } from 'redux';
import api from '../Middleware/api'
import reducer from '../Reducers';
import thunk from 'redux-thunk';

const logger = api;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;