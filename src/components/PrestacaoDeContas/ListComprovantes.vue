<template>
  <div>
    <h1>oiiiii</h1>
    <div v-for="comprovante in comprovantes" v-bind:key="comprovante.id" class="">
      <p>{{comprovante.name}}</p>
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
      fetchComprovantes: 'comprovantes/default',
    }),
  },
  computed: {
    ...mapGetters({
      categories: 'comprovantes/default',
    }),
  },
};
</script>
