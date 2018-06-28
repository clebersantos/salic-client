import * as types from './types';

export const state = {
  projeto: {},
  comprovantes: [],
};

export const mutations = {
  // eslint-disable-next-line
  [types.SET_PROJETO](state, projeto) {
    state.projeto = projeto;
  },
  // eslint-disable-next-line
  [types.SET_COMPROVANTES](state, comprovantes) {
    state.comprovantes = comprovantes;
  },
};
