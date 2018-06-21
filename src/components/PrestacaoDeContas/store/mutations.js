import * as types from './types';

export const state = {
  comprovantes: [],
};

export const mutations = {
  // eslint-disable-next-line
  [types.default](state, comprovantes) {
    state.comprovantes = comprovantes;
  },
};
