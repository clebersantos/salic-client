import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import prestacaoDeContas from './components/PrestacaoDeContas/store';

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(Vuetify);

const debug = process.env.NODE_ENV !== 'production' || process.env.NODE_ENV !== 'staging';

export default new Vuex.Store({
  modules: {
    prestacaoDeContas,
  },
  strict: debug,
});
