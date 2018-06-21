import PrestacaoDeContasAPI from '@/helpers/api/PrestacaoDeContas';

import * as types from './types';

const prestacaoDeContasAPI = new PrestacaoDeContasAPI('projeto');

export default ({ commit }) => {
  prestacaoDeContasAPI.buscaProjeto()
    .then((response) => {
      const projeto = response.data;
      commit(types.default, projeto.data);
    });
};
