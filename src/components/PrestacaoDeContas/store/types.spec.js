import * as types from './types';

describe('PrestacaoDeContas types', () => {
  test('SET_PROJETO', () => {
    expect(types.SET_PROJETO).toEqual('SET_PROJETO');
  });

  test('SET_COMPROVANTES', () => {
    expect(types.SET_COMPROVANTES).toEqual('SET_COMPROVANTES');
  });
});
