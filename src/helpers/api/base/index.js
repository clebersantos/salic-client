import instance from './instance';

const defaultConfig = () => ({
  // eslint-disable-next-line
  headers: Object.assign({}, { 'Cookie': 'PHPSESSID=f35d28dcf98f13fded03d151ae088664' }),
});

export const get = (url, config = {}) => {
  const axios = instance();
  return axios.get(url, Object.assign({}, defaultConfig(), config));
};

export const post = (url, config = {}) => {
  const axios = instance();
  return axios.get(url, Object.assign({}, defaultConfig(), config));
};
