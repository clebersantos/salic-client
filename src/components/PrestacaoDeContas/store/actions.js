import CategoryAPI from '@/helpers/api/Category';

import * as types from './types';

const categoryAPI = new CategoryAPI('category');

export default ({ commit }) => categoryAPI.fetchCategories()
  .then(response => commit(types.default, response.data));
