import { createStore, applyMiddleware } from 'redux';

import { statReducer } from './reducer';

import { loggingMiddleware } from './logger';

export const STAT_STORE = 'statStore';

export const makeStore = () => createStore(statReducer, applyMiddleware(loggingMiddleware));
