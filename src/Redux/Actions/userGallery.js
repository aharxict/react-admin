import { CALL_API } from '../Middleware/api';
import { baseApiUrl } from '../../Utils/urls';
import {
  USER_GALLERY_LOAD_REQUEST,
  USER_GALLERY_LOAD_SUCCESS,
  USER_GALLERY_LOAD_FAILURE,
} from './actionTypes';

export function loadUserGallery(albumId = null) {
  const config = {
    url: `${baseApiUrl}/photos`,
    method: 'get',
    params: {
      albumId: albumId,
    },
  };

  return dispatch => {
    return dispatch({
      [CALL_API]: {
        types: [
          USER_GALLERY_LOAD_REQUEST,
          USER_GALLERY_LOAD_SUCCESS,
          USER_GALLERY_LOAD_FAILURE
        ],
        config,
      }
    });
  }
}

