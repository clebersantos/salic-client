<template>
  <div align="left">
    <Projeto></Projeto>
    <Comprovante></Comprovante>
  </div>
</template>

<script>
import Projeto from '@/components/PrestacaoDeContas/Projeto';
import Comprovante from '@/components/PrestacaoDeContas/Comprovante';

export default {
  name: 'index',
  components: {
    Projeto,
    Comprovante,
  },
};
</script>
