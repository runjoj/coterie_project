import { combineReducers } from 'redux';

import { alertMessage } from '../modules/alertMessage'

let rootReducer = combineReducers({
  summaries,
  alertMessage
});

export default rootReducer;
