import { combineReducers } from 'redux';

import { alertMessage } from '../modules/alertMessage'

let rootReducer = combineReducers({
  alertMessage
});

export default rootReducer;
