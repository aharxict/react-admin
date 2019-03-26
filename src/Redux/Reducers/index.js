import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dashboard from './dashboard'
import usersList from './usersList'
import userDetails from './userDetails'

export default combineReducers({
  form: formReducer,
  dashboard,
  usersList,
  userDetails,
});