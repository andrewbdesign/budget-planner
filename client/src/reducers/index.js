import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import bill from './bill';
import expense from './expense';
import dream from './dream';
import goal from './goal';

export default combineReducers({
  alert,
  auth,
  profile,
  bill,
  expense,
  dream,
  goal,
});
