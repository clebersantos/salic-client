import PrestacaoDeContasAPI from '@/helpers/api/PrestacaoDeContas';

import * as types from './types';

const prestacaoDeContasAPI = new PrestacaoDeContasAPI('comprovantes');

export default ({ commit }) => prestacaoDeContasAPI.fetchComprovantes()
  .then(response => commit(types.default, response.data));
