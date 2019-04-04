import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../../Utils/updateObject'

export const initialState = {
  isOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.MODAL_BOX_OPEN:
      return updateObject(state, { isOpen: true });
    case actionTypes.MODAL_BOX_CLOSE:
      return updateObject(state, { isOpen: false });
    default:
      return state;
  }
}