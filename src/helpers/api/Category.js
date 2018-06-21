import API from './base';

export default class Category extends API {
  constructor(path) {
    // config.path = 'categories';
    const config = {};
    config.path = path;

    super(config);
  }

  fetchCategories() {
    return this.get('index');
  }
}
