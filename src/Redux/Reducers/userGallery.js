import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../../Utils/updateObject'

export const initialState = {
  isLoading: true,
  data: [{
    albumId: null,
    id: null,
    title: null,
    url: null,
    thumbnailUrl: null,
  }],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_GALLERY_LOAD_REQUEST:
      return updateObject(state, { isLoading: true });
    case actionTypes.USER_GALLERY_LOAD_SUCCESS:
      return updateObject(state, {
        data: action.response,
        isLoading: false
      });
    case actionTypes.USER_GALLERY_LOAD_FAILURE:
      return updateObject(state, { isLoading: false });
    default:
      return state;
  }
}