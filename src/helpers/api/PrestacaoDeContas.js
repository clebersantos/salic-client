import * as axiosAPI from './base';

export const buscaProjeto = () => {
  const url = 'http://172.20.0.3/prestacao-contas/planilha-aprovacao/get?idPronac=132451&idPlanilhaItem=130&produto=0&uf=SP&idmunicipio=355030';
  return axiosAPI.get(url);
};

export const buscaComprovante = () => {
  const url = 'http://172.20.0.3/prestacao-contas/comprovante-pagamento?idPronac=132451&idPlanilhaItem=130&produto=0&uf=SP&idmunicipio=355030';
  return axiosAPI.get(url);
};
