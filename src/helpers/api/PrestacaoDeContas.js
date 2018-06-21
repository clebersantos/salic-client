import API from './base';

export default class PrestacaoDeContas extends API {
  constructor(path) {
    // config.path = 'categories';
    const config = {};
    config.path = path;

    super(config);
  }

  fetchComprovantes() {
    return this.get('prestacao-contas');
  }
}
