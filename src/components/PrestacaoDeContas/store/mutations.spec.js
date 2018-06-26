import { mutations } from './mutations';

describe('PrestacaoDeContas Mutations', () => {
  let state;
  let defaultState;
  let projeto;
  let comprovante;

  beforeEach(() => {
    defaultState = {
      projeto: {
        IdPRONAC: '',
        Item: '',
        NomeProjeto: '',
      },
      comprovante: [
        {
          CNPJCPF: '',
          Descricao: '',
          Item: ''
        },
      ],
    };

    state = Object.assign({}, defaultState);

    projeto = {
      IdPRONAC: '132451',
      Item: 'Hospedagem sem Alimentação',
      NomeProjeto: 'Criança é Vida - 15 anos',
    };

    comprovante = [
      {
        CNPJCPF: '09967852014349',
        Descricao: 'Hotelaria Accor Brasil SA',
        Item: 'Hospedagem sem Alimentação',
      },
    ];
  });

  test('SET_PROJETO', () => {
    mutations.SET_PROJETO(state, projeto);
    expect(state.projeto).toEqual(projeto);
  });

  test('SET_COMPROVANTE', () => {
    mutations.SET_COMPROVANTE(state, comprovante);
    expect(state.comprovante).toEqual(comprovante);
  });
});