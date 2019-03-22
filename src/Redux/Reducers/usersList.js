import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../../Utils/updateObject'

export const initialState = {
  isLoading: true,
  data: [{
    id: null,
    name: null,
    username: null,
    email: null,
    address: null,
    phone: null,
    website: null,
    company: null,
  }],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERS_LIST_LOAD_REQUEST:
      return updateObject(state, { isLoading: true });
    case actionTypes.USERS_LIST_LOAD_SUCCESS:
      return updateObject(state, {
        data: action.response,
        isLoading: false
      });
    case actionTypes.USERS_LIST_LOAD_FAILURE:
      return updateObject(state, { isLoading: false });
    default:
      return state;
  }
}