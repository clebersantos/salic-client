import * as types from './types';

describe('PrestacaoDeContas types', () => {
  test('SET_PROJETO', () => {
    expect(types.SET_PROJETO).toEqual('SET_PROJETO');
  });

  test('SET_COMPROVANTE', () => {
    expect(types.SET_COMPROVANTE).toEqual('SET_COMPROVANTE');
  });
});
