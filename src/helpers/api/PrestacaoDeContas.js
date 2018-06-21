import API from './base';

export default class PrestacaoDeContas extends API {
  constructor(path) {
    // config.path = 'categories';
    const config = {};
    config.path = path;

    super(config);
  }

  buscaProjeto() {
    const url = 'http://172.20.0.3/prestacao-contas/planilha-aprovacao/get?idPronac=132451&idPlanilhaItem=130&produto=0&uf=SP&idmunicipio=355030';
    return this.get(url);
  }

  buscaComprovante() {
    const url = 'http://172.20.0.3/prestacao-contas/comprovante-pagamento?idPronac=132451&idPlanilhaItem=130&produto=0&uf=SP&idmunicipio=355030';
    return this.get(url);
  }
}
