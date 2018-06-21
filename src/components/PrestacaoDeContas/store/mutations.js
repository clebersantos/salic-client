import * as types from './types';

export const state = {
  categories: [],
};

export const mutations = {
  // eslint-disable-next-line
  [types.default](state, categories) {
    state.categories = categories;
  },
};
