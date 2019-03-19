import { CALL_API } from '../Middleware/api';
import { baseApiUrl } from '../../Utils/urls';
import {
  DASHBOARD_POSTS_LOAD_REQUEST,
  DASHBOARD_POSTS_LOAD_SUCCESS,
  DASHBOARD_POSTS_LOAD_FAILURE
} from './actionTypes';

export function loadDashboardPosts(params = {}) {
  const config = {
    url: baseApiUrl + '/posts',
    method: 'get',
    params,
  };

  return dispatch => {
    return dispatch({
      [CALL_API]: {
        types: [
          DASHBOARD_POSTS_LOAD_REQUEST,
          DASHBOARD_POSTS_LOAD_SUCCESS,
          DASHBOARD_POSTS_LOAD_FAILURE
        ],
        config,
        params,
      }
    });
  }
}