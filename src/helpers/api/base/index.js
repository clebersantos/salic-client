import instance from './instance';
// import Session from '@/helpers/session';
//
// const defaultConfig = () => ({
//   headers: Object.assign({}, Session.auth.get()),
// });

export default class API {
  constructor(config = {}) {
    this.path = config.path;

    this.axios = instance();
  }

  get(resource = '', config = {}) {
    console.log(this.path);
    console.log(resource);
    console.log(config);

    return this.axios.get(`${this.path}/${resource}`, Object.assign({}, config));
  }

  // put(resource = '', data, config = {}) {
  //   return this.axios.put(`${this.path}/${resource}`, data, Object.assign({}, config));
  // }
  //
  // post(data, config = {}, resource = '') {
  //   const path = `${this.path}/${resource}`;
  //
  //   return this.axios.post(path, data, Object.assign({}, config));
  // }
  //
  // delete(resource = '', config = {}) {
  //   return this.axios.delete(`${this.path}/${resource}`, Object.assign({}, config));
  // }
}
