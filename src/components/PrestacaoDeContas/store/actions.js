import PrestacaoDeContasAPI from '@/helpers/api/PrestacaoDeContas';

import * as types from './types';

const prestacaoDeContasAPI = new PrestacaoDeContasAPI('projeto');

export const buscaProjeto = ({ commit }) => {
  prestacaoDeContasAPI.buscaProjeto()
    .then((response) => {
      const projeto = response.data;
      commit(types.SET_PROJETO, projeto.data);
    });
};

export const buscaComprovante = ({ commit }) => {
  prestacaoDeContasAPI.buscaComprovante()
    .then((response) => {
      console.log('asdasdas');
      console.log(response);
      const comprovante = response.data;
      commit(types.SET_COMPROVANTE, comprovante.data);
    });
};
