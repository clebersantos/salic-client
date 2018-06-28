import * as prestacaoDeContasAPI from '@/helpers/api/PrestacaoDeContas';

import * as types from './types';

export const buscaProjeto = ({ commit }) => {
  prestacaoDeContasAPI.buscaProjeto()
    .then((response) => {
      const data = response.data;
      const projeto = data.data;
      commit(types.SET_PROJETO, projeto);
    });
};

export const buscaComprovantes = ({ commit }) => {
  prestacaoDeContasAPI.buscaComprovantes()
    .then((response) => {
      const comprovantes = response.data;
      commit(types.SET_COMPROVANTES, comprovantes.data);
    });
};
