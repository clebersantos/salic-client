import * as actions from './actions';
import * as MockAPI from '../../../../test/unit/helpers/api';
import * as prestacaoDeContasAPI from '@/helpers/api/PrestacaoDeContas';

describe('PrestacaoDeContas actions', () => {
  let commit;
  let mockReponse;

  describe('buscaProjeto', () => {
    beforeEach(() => {
      mockReponse = {
        data: {
          data: {
            projeto: {
              IdPRONAC: '132451',
              Item: 'Hospedagem sem Alimentação',
              NomeProjeto: 'Criança é Vida - 15 anos',
            },
          },
        },
      };

      commit = jest.fn();

      MockAPI.setResponse(mockReponse);
    });

    afterEach(() => {
      MockAPI.setResponse(null);
    });

    test('it calls scheduling.groupCategories', () => {
      jest.spyOn(prestacaoDeContasAPI, 'buscaProjeto');
      actions.buscaProjeto({ commit });
      expect(prestacaoDeContasAPI.buscaProjeto).toHaveBeenCalled();
    });

    test('it is commit to buscaProjeto', (done) => {
      const projeto = mockReponse.data;
      actions.buscaProjeto({ commit });
      done();
      expect(commit).toHaveBeenCalledWith('SET_PROJETO', projeto);
    });
  });

  describe('buscaComprovante', () => {
    beforeEach(() => {
      mockReponse = {
        data: {
          comprovante: [
            {
              CNPJCPF: '09967852014349',
              Descricao: 'Hotelaria Accor Brasil SA',
              Item: 'Hospedagem sem Alimentação',
            },
          ],
        },
      };

      commit = jest.fn();

      MockAPI.setResponse(mockReponse);
    });

    afterEach(() => {
      MockAPI.setResponse(null);
    });

    test('it is commit to buscaComprovante', (done) => {
      const comprovante = mockReponse.data;
      actions.buscaComprovante({ commit });
      done();
      expect(commit).toHaveBeenCalledWith('SET_COMPROVANTE', comprovante);
    });
  });
});
