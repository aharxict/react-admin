import { CALL_API } from '../Middleware/api';
import { baseApiUrl } from '../../Utils/urls';
import {
  USER_DETAILS_LOAD_REQUEST,
  USER_DETAILS_LOAD_SUCCESS,
  USER_DETAILS_LOAD_FAILURE,
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_SUCCESS,
  USER_DETAILS_UPDATE_FAILURE
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

export function updateUserDetails(userId = {}, data = {}) {
  const config = {
    url: `${baseApiUrl}/users/${userId}`,
    method: 'put',
    data: data,
  };

  return dispatch => {
    return dispatch({
      [CALL_API]: {
        types: [
          USER_DETAILS_UPDATE_REQUEST,
          USER_DETAILS_UPDATE_SUCCESS,
          USER_DETAILS_UPDATE_FAILURE
        ],
        config,
      }
    });
  }
}
