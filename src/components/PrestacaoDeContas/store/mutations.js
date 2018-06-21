import * as types from './types';

export const state = {
  projeto: {},
  comprovante: {},
};

export const mutations = {
  // eslint-disable-next-line
  [types.SET_PROJETO](state, projeto) {
    state.projeto = projeto;
  },
  // eslint-disable-next-line
  [types.SET_COMPROVANTE](state, comprovante) {
    state.comprovante = comprovante;
  },
};
