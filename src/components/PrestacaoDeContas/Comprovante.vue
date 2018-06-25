<template>
  <div>
    <div>
      <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
      <b-collapse id="collapse1" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
          <b-collapse id=collapse1_inner class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
    <div
    v-for="(comprovante, index) in comprovantes"
    :key="index"
    >
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
          <td>{{dataPagamento}}</td>
          <th>N&ordm; Documento Pagamento</th>
          <td>{{comprovante.nrDocumentoDePagamento}}</td>
        </tr>
        <tr>
          <th>Valor</th>
          <td>R$  {{valor}}</td>
          <th>Arquivo</th>
          <td colspan="5">
            <a :href="'/upload/abrir/id/' + comprovante.idArquivo">{{comprovante.nmArquivo}}</a>
          </td>
        </tr>
        <tr>
          <th>Justificativa do Proponente</th>
          <td colspan="7">{{comprovante.dsJustificativa}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
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
