import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dashboard from './dashboard';
import usersList from './usersList';
import userDetails from './userDetails';
import userAlbums from './userAlbums';
import userGallery from './userGallery';
import modalBox from './modalBox';

export default combineReducers({
  form: formReducer,
  dashboard,
  usersList,
  userDetails,
  userAlbums,
  userGallery,
  modalBox,
});