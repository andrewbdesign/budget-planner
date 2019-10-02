import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import bill from './bill';
import expense from './expense';
export default combineReducers({ alert, auth, profile, bill, expense });
