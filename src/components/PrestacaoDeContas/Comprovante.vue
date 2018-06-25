<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(comprovante, index) in comprovantes"
      :key="index"
      expand-icon="mdi-menu-down"
    >
      <div slot="header">{{comprovante.Descricao}}</div>
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
                <th>Dt. Emiss&atilde;o do comprovante de despesa</th>
                <td>{{dataEmissaoComprovante}}</td>
                <th>Forma de Pagamento</th>
                <td>{{comprovante.tpFormaDePagamento}}</td>
                <th>Data do Pagamento</th>
                <td>{{dataPagamento.format('DD/MM/Y')}}</td>
                <th>N&ordm; Documento Pagamento</th>
                <td>{{comprovante.nrDocumentoDePagamento}}</td>
              </tr>
              <tr>
                <th>Valor</th>
                <td>R$  {{valor}}</td>
                <th>Arquivo</th>
                <td colspan="5">
                  <a :href="'/upload/abrir/id/' + comprovante.idArquivo">
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
    dataEmissaoComprovante() {
      return moment(this.dados.dtEmissao).format('DD/MM/Y');
    },
    dataPagamento() {
      return moment(this.dados.dtPagamento).format('DD/MM/Y');
    },
    valor() {
      return parseFloat(this.dados.vlComprovacao).toFixed(2);
    },
  },
};
</script>
