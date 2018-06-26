import Vue from 'vue';
import Router from 'vue-router';
import PrestacaoDeContas from '@/components/PrestacaoDeContas';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/prestacao_de_contas',
      name: 'PrestacaoDeContas',
      component: PrestacaoDeContas,
    },
  ],
});
