import * as types from './types';

export const state = {
  projeto: {},
};

export const mutations = {
  // eslint-disable-next-line
  [types.default](state, projeto) {
    state.projeto = projeto;
  },
};
