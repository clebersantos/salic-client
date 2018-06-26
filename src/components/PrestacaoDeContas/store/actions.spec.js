import * as actions from './actions';

describe('PrestacaoDeContas actions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  describe('buscaProjeto', () => {
    beforeEach('', () => {
      actions.buscaProjeto({ commit });
    });

    test('it is commit to buscaProjeto', () => {
      const projeto = 'projeto';

      expect(commit).toHaveBeenCalledWith('SET_PROJETO', projeto);
    });
  });
});