import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//array keeps this scalable from an early stage
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))


export default store;

