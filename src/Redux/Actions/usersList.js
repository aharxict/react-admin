import { CALL_API } from '../Middleware/api';
import { baseApiUrl } from '../../Utils/urls';
import {
  USERS_LIST_LOAD_REQUEST,
  USERS_LIST_LOAD_SUCCESS,
  USERS_LIST_LOAD_FAILURE
} from './actionTypes';

export function loadUsersList(params = {}) {
  const config = {
    url: `${baseApiUrl}/users`,
    method: 'get',
    params,
  };

  return dispatch => {
    return dispatch({
      [CALL_API]: {
        types: [
          USERS_LIST_LOAD_REQUEST,
          USERS_LIST_LOAD_SUCCESS,
          USERS_LIST_LOAD_FAILURE
        ],
        config,
        params,
      }
    });
  }
}