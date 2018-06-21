<template>
  <div>
    <div v-for="comprovante in comprovantes" v-bind:key="comprovante.id" class="">
      <p>{{comprovante}}</p>
      <br>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ListComprovantes',
  created() {
    this.fetchComprovantes();
  },
  methods: {
    ...mapActions({
      fetchComprovantes: 'prestacaoDeContas/default',
    }),
  },
  computed: {
    ...mapGetters({
      comprovantes: 'prestacaoDeContas/default',
    }),
  },
};
</script>
