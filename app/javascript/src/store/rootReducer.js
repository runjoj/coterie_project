import { combineReducers } from 'redux';

import { alertMessage } from '../modules/alertMessage'
import { summaries } from '../modules/summaries'
import { profiles } from '../modules/profiles'

let rootReducer = combineReducers({
  summaries,
  profiles,
  alertMessage
});

export default rootReducer;
