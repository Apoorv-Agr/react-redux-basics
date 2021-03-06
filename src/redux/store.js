import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './rootReducer';

import logger from 'redux-logger';



const store = createStore(rootReducers, applyMiddleware(logger));


export default store;