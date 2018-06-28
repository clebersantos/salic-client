import * as getters from './getters';

describe('PrestacaoDeContas getters', () => {
  let state;

  beforeEach(() => {
    state = {
      projeto: {},
      comprovantes: [],
    };
  });

  test('projeto', () => {
    const result = getters.projeto(state);
    expect(result).toEqual(state.projeto);
  });

  test('comprovantes', () => {
    const result = getters.comprovantes(state);
    expect(result).toEqual(state.comprovantes);
  });
});
