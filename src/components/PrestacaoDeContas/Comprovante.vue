<template>
  <v-expansion-panel>
    <v-expansion-panel-content
    v-for="(comprovante, index) in comprovantes"
    :key="index"
    expand-icon="mdi-menu-down"
    >
    <div slot="header">
      <nobr>{{comprovante.Descricao}}</nobr>
      -
      <nobr v-bind:style="{color: badgeCSS(comprovante.stItemAvaliado)}">
        {{situacao(comprovante.stItemAvaliado)}}
      </nobr>
    </div>
    <v-card>
      <v-card-text class="grey lighten-3">
        <table class="bordered">
          <tbody>
            <tr>
              <th>Fornecedor</th>
              <td>{{comprovante.Descricao}}</td>
              <th>CNPJ/CPF</th>
              <td colspan="5">{{formatCpfOrCnpj(comprovante)}}</td>
            </tr>
            <tr>
              <th>Comprovante</th>
              <td>{{comprovante.tpDocumento}}</td>
              <th>Número</th>
              <td>{{comprovante.nrComprovante}}</td>
              <th>S&eacute;rie</th>
              <td colspan="3">{{comprovante.nrSerie}}</td>
            </tr>
            <tr>
              <th>Dt. Emissão do comprovante de despesa</th>
              <td>{{formatDate(comprovante.dataEmissaoComprovante)}}</td>
              <th>Forma de Pagamento</th>
              <td>{{comprovante.tpFormaDePagamento}}</td>
              <th>Data do Pagamento</th>
              <td>{{formatDate(comprovante.dataPagamento)}}</td>
              <th>Nº Documento Pagamento</th>
              <td>{{comprovante.nrDocumentoDePagamento}}</td>
            </tr>
            <tr>
              <th>Valor</th>
              <td>R$ {{formatValue(comprovante.vlComprovacao)}}</td>
              <th>Arquivo</th>
              <td colspan="5">
                <a :href="'http://172.20.0.3/upload/abrir/id/' + comprovante.idArquivo">
                  {{comprovante.nmArquivo}}
                </a>
              </td>
            </tr>
            <tr>
              <th>Justificativa do Proponente</th>
              <td colspan="7">{{comprovante.dsJustificativa}}</td>
            </tr>
          </tbody>
        </table>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';

export default {
  created() {
    this.buscaComprovante();
  },
  computed: {
    ...mapGetters({
      comprovantes: 'prestacaoDeContas/comprovante',
    }),
  },
  methods: {
    ...mapActions({
      buscaComprovante: 'prestacaoDeContas/buscaComprovante',
    }),
    formatCpfOrCnpj(comprovante) {
      if (comprovante.CNPJCPF.length > 11) {
        return comprovante.CNPJCPF.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      }

      return comprovante.CNPJCPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },
    formatDate(date) {
      return moment(date).format('DD/MM/Y');
    },
    formatValue(value) {
      return parseFloat(value).toFixed(2);
    },
    badgeCSS(id) {
      const parsedId = parseInt(id, 10);
      switch (parsedId) {
        case 1:
          return 'green';
        case 3:
          return 'red';
        case 4:
          return 'grey';
        default:
          return 'black';
      }
    },
    situacao(id) {
      const parsedId = parseInt(id, 10);
      switch (parsedId) {
        case 1:
          return 'APROVADO';
        case 3:
          return 'RECUSADO';
        default:
          return 'N\xC3O AVALIADO';
      }
    },
  },
};
</script>
