<template>
  <div>
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Projeto',
  created() {
    this.buscaProjeto();
  },
  methods: {
    ...mapActions({
      buscaProjeto: 'prestacaoDeContas/buscaProjeto',
    }),
    formatValues(value) {
      if (value === undefined) {
        return '0';
      }

      if (value.indexOf('.') === -1) {
        return this.formatValuesWithoutCents(value);
      }

      return this.formatValuesWithCents(value);
    },
    formatValuesWithoutCents(value) {
      const valueWithCents = value.concat(',00');
      const result = valueWithCents.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return result;
    },
    formatValuesWithCents(value) {
      const valueParsedToFloat = parseFloat(value).toFixed(2);
      const valueParsedToString = valueParsedToFloat.toString();
      const valueChangedPointByComma = valueParsedToString.replace('.', ',');
      const result = valueChangedPointByComma.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

      return result;
    },
  },
  computed: {
    ...mapGetters({
      projeto: 'prestacaoDeContas/projeto',
    }),
  },
};
</script>
