import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../../Utils/updateObject'

export const initialState = {
  isLoading: true,
  data: {
    id: null,
    name: null,
    username: null,
    email: null,
    address: null,
    phone: null,
    website: null,
    company: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_DETAILS_LOAD_REQUEST:
    case actionTypes.USER_DETAILS_UPDATE_REQUEST:
      return updateObject(state, { isLoading: true });
    case actionTypes.USER_DETAILS_LOAD_SUCCESS:
    case actionTypes.USER_DETAILS_UPDATE_SUCCESS:
      return updateObject(state, {
        data: action.response,
        isLoading: false
      });
    case actionTypes.USER_DETAILS_LOAD_FAILURE:
    case actionTypes.USER_DETAILS_UPDATE_FAILURE:
      return updateObject(state, { isLoading: false });
    default:
      return state;
  }
}