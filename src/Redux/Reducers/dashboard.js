import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../../Utils/updateObject'

export const initialState = {
  isLoading: true,
  data: [{
    userId: null,
    id: null,
    title: null,
    body: null,
  }],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.DASHBOARD_POSTS_LOAD_REQUEST:
      return updateObject(state, { isLoading: true });
    case actionTypes.DASHBOARD_POSTS_LOAD_SUCCESS:
      return updateObject(state, {
        data: action.response,
        isLoading: false
      });
    case actionTypes.DASHBOARD_POSTS_LOAD_FAILURE:
      return updateObject(state, { isLoading: false });
    case actionTypes.DASHBOARD_SET_SELECTED_USER:
      return updateObject(state, { selectedUserId: action.userId });
    default:
      return state;
  }
}