import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../../Utils/updateObject'

export const initialState = {
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.DASHBOARD_LOAD_REQUEST:
    case actionTypes.DASHBOARD_LOAD_SUCCESS:
    case actionTypes.DASHBOARD_LOAD_FAILURE:
      return updateObject(state, { isLoading: false });
    default:
      return state;
  }
}