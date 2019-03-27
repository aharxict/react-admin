import axios from 'axios';

const API_REQUEST_TIMEOUT = 30000;

function callApi(config) {
  config.timeout = API_REQUEST_TIMEOUT;

  axios.interceptors.response.use(res => res, error => Promise.reject(error));

  return axios(config);
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

export default store => {
  return next => {
    return action => {
      const callAPI = action[CALL_API];

      //check if need to do API call
      if (typeof callAPI === 'undefined') {
        return next(action);
      }

      const { types } = callAPI;
      const { params } = callAPI;
      let { config } = callAPI;

      function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
      }

      const [requestType, successType, failureType] = types;

      next(actionWith({ type: requestType, params }));

      // Axios does not add automatically header X-Requested-With
      config['headers'] = config['headers'] || {};
      config['headers']['X-Requested-With'] = 'XMLHttpRequest';
      config['headers']['Content-type'] = 'application/json';

      return callApi(config)
        .then(response => {
          return next(
            actionWith({
              type: successType,
              response: response.data,
              params,
            })
          );
        })
        .catch(error => {
          return next(
            actionWith({
              type: failureType,
              error: error.message || 'An error has occurred',
              params,
            })
          );
        });
    }
  }
};