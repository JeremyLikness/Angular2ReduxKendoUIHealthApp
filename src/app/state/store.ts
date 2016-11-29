import { createStore } from 'redux';

import { statReducer } from './reducer';

export const STAT_STORE = 'statStore';

export const makeStore = () => createStore(statReducer);
