import { CALL_API } from '../Middleware/api';
import { baseApiUrl } from '../../Utils/urls';
import {
  USER_ALBUMS_LOAD_REQUEST,
  USER_ALBUMS_LOAD_SUCCESS,
  USER_ALBUMS_LOAD_FAILURE,
} from './actionTypes';

export function loadUserAlbums(userId = null) {
  const config = {
    url: `${baseApiUrl}/albums`,
    method: 'get',
    params: {
      userId: userId,
    },
  };

  return dispatch => {
    return dispatch({
      [CALL_API]: {
        types: [
          USER_ALBUMS_LOAD_REQUEST,
          USER_ALBUMS_LOAD_SUCCESS,
          USER_ALBUMS_LOAD_FAILURE
        ],
        config,
      }
    });
  }
}

