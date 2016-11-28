import { createStore } from 'redux';

import { statReducer } from './reducer';

export const makeStore = () => createStore(statReducer);