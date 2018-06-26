import * as getters from './getters';

describe('PrestacaoDeContas getters', () => {
  let state;

  beforeEach(() => {
    state = {
      projeto: {},
      comprovante: {},
    };
  });

  test('projeto', () => {
    const result = getters.projeto(state);
    expect(result).toEqual(state.projeto);
  });

  test('comprovante', () => {
    const result = getters.comprovante(state);
    expect(result).toEqual(state.comprovante);
  });
});
