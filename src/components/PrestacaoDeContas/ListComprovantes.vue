<template>
  <div>
    <div v-for="projeto in comprovantes" v-bind:key="projeto.id" class="">
      <div class="card">
        <div class="card-content">
          <span class="card-title">{{projeto.NomeProjeto}}</span>
          <table class="tabela">
            <tbody>
              <tr>
                <th>Produto:</th>
                <td>{{projeto.Produto}}</td>
                <th>Etapa:</th>
                <td>{{projeto.Etapa}}</td>
                <th>Item de Custo:</th>
                <td>{{projeto.Item}}</td>
              </tr>
              <tr>
                <th>Valor Aprovado:</th>
                <td>R$ {{ formatValues(projeto.vlAprovado) }}</td>
                <th>Valor Comprovado:</th>
                <td>R$ {{ formatValues(projeto.vlComprovado) }}</td>
                <th>Comprovação Validada:</th>
                <td>R$ {{ formatValues(projeto.ComprovacaoValidada) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
    formatValues: function (value) {
        if (value === undefined) {
            return '0';
        }

        if (value.indexOf('.') === -1) {
            value = value.concat('.00');
        }

        const valueChangedPointByComma = value.replace('.', ',');

        return valueChangedPointByComma.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
  computed: {
    ...mapGetters({
      comprovantes: 'prestacaoDeContas/default',
    }),
  },
};
</script>
