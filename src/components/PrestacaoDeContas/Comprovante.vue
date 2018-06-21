<template>
  <div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  created() {
    this.buscaComprovante();
  },
  computed: {
    ...mapGetters({
      comprovante: 'prestacaoDeContas/comprovante',
    }),
  },
  methods: {
    ...mapActions({
      buscaComprovante: 'prestacaoDeContas/buscaComprovante',
    }),
  },
};
</script>
