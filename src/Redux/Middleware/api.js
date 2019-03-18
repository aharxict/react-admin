// import axios from 'axios';
//
// const API_REQUEST_TIMEOUT = 30000;
//
// function callApi(config) {
//   config.timeout = API_REQUEST_TIMEOUT;
//
//   axios.interceptors.response.use(res => res, error => Promise.reject(error));
//
//   return axios(config);
// }

export default store => {
  return next => {
    return action => {

      // let { config } = null;

      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};