import { CALL_API } from '../Middleware/api';
import { baseApiUrl } from '../../Utils/urls';
import {
  USER_DETAILS_LOAD_REQUEST,
  USER_DETAILS_LOAD_SUCCESS,
  USER_DETAILS_LOAD_FAILURE
} from './actionTypes';

export function loadUserDetails(userId = {}, params = {}) {
  const config = {
    url: `${baseApiUrl}/users/${userId}`,
    method: 'get',
    params,
  };

  return dispatch => {
    return dispatch({
      [CALL_API]: {
        types: [
          USER_DETAILS_LOAD_REQUEST,
          USER_DETAILS_LOAD_SUCCESS,
          USER_DETAILS_LOAD_FAILURE
        ],
        config,
        params,
      }
    });
  }
}