import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../../Utils/updateObject'

export const initialState = {
  isLoading: true,
  data: [{
    userId: null,
    id: null,
    title: null,
  }],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_ALBUMS_LOAD_REQUEST:
      return updateObject(state, { isLoading: true });
    case actionTypes.USER_ALBUMS_LOAD_SUCCESS:
      return updateObject(state, {
        data: action.response,
        isLoading: false
      });
    case actionTypes.USER_ALBUMS_LOAD_FAILURE:
      return updateObject(state, { isLoading: false });
    case actionTypes.USER_SET_SELECTED_ALBUM:
      return updateObject(state, { selectedAlbumId: action.albumId });
    default:
      return state;
  }
}