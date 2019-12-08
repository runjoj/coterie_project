import { combineReducers } from 'redux';

import { alertMessage } from '../modules/alertMessage'
import { summaries } from '../modules/summaries'

let rootReducer = combineReducers({
  summaries,
  alertMessage
});

export default rootReducer;
