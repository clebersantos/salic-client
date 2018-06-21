import axios from 'axios';

const API_ENDPOINT = process.env.API_ENDPOINT;

let instance;

export default () => {
  if (instance) {
    return instance;
  }

  instance = axios.create(
    { baseURL: API_ENDPOINT },
  );

  instance.interceptors.response.use(response => response,
    (error) => {
      if (error.response.status === 401) {
        window.location.href = process.env.APP_LOGIN_ENDPOINT;
        return error;
      }

      return Promise.reject(error);
    });

  return instance;
};
