import {
  MODAL_BOX_OPEN,
  MODAL_BOX_CLOSE,
} from './actionTypes';

export function openModalBox() {
  return dispatch => {
    return dispatch({
      type: MODAL_BOX_OPEN
    });
  }
}
export function closeModalBox() {
  return dispatch => {
    return dispatch({
      type: MODAL_BOX_CLOSE
    });
  }
}
