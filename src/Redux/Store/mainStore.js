import { createStore, applyMiddleware, compose } from 'redux';
import api from '../Middleware/api'
import reducer from '../Reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const logger = createLogger({ collapsed: true });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, api, logger)));

export default store;