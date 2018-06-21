import instance from './instance';

const defaultConfig = () => ({
  headers: Object.assign({}, { 'Cookie': 'PHPSESSID=f35d28dcf98f13fded03d151ae088664' }),
});

export default class API {
  constructor(config = {}) {
    this.path = config.path;

    this.axios = instance();
  }

  get(resource = '', config = {}) {
    const url = 'http://172.20.0.3/prestacao-contas/planilha-aprovacao/get?idPronac=132451&idPlanilhaItem=130&produto=0&uf=SP&idmunicipio=355030'

    return this.axios.get(url, Object.assign({}, defaultConfig(), config));
  }
}
