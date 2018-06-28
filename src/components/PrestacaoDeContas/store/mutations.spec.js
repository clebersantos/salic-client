import { mutations } from './mutations';

describe('PrestacaoDeContas Mutations', () => {
  let state;
  let defaultState;
  let projeto;
  let comprovantes;

  beforeEach(() => {
    defaultState = {
      projeto: {
        IdPRONAC: '',
        Item: '',
        NomeProjeto: '',
      },
      comprovantes: [
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

    comprovantes = [
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

  test('SET_COMPROVANTES', () => {
    mutations.SET_COMPROVANTES(state, comprovantes);
    expect(state.comprovantes).toEqual(comprovantes);
  });
});