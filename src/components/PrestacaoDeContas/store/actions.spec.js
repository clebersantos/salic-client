import * as actions from './actions';
import * as MockAPI from '../../../../test/unit/helpers/api';
import PrestacaoDeContasAPI from '@/helpers/api/PrestacaoDeContas';

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

    test('it calls prestacaoDeContasAPI.buscaProjeto', () => {
      const prestacaoDeContasAPI = new PrestacaoDeContasAPI('projeto');
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
 
// describe('scheduling actions', () => {
//   const commit = jest.fn();
//   const dispatch = jest.fn();
//   let mutation;
//   let mockReponse;
 
//   describe('setGroup action', () => {
//     let groupData;
 
//     beforeEach(() => {
//       groupData = {
//         id: 1,
//       };
 
//       actions.setGroup({ commit, dispatch }, groupData);
//     });
 
//     test('it commits to SET_GROUP', () => {
//       mutation = 'SET_GROUP';
//       expect(commit).toBeCalledWith(mutation, groupData);
//     });
 
//     test('it dispatches fetchGroupCategories', () => {
//       const action = 'fetchGroupCategories';
//       expect(dispatch).toBeCalledWith(action, groupData.id);
//     });
//   });                                                                                      
 
//   describe('fetchGroupCategories action', () => {
//     const groupId = 10;
 
//     beforeEach(() => {
//       mockReponse = {
//         group: {
//           project: {
//             categories: [
//               {
//                 id: 1,
//                 name: 'category 1',
//               },
//               {
//                 id: 2,
//                 name: 'category 2',
//               },
//             ],
//           },
//         },
//       };
//       MockAPI.setResponse(mockReponse);
//     });
 
//     afterEach(() => {
//       MockAPI.setResponse(null);
//     });
 
//     test('it calls scheduling.groupCategories', () => {
//       jest.spyOn(scheduling, 'groupCategories');
//       actions.fetchGroupCategories({ dispatch }, groupId);
//       expect(scheduling.groupCategories).toHaveBeenCalledWith(groupId);
//     });
 
//     test('if succeed it dispatches setGroupCategories', (done) => {
//       const groupCategories = mockReponse.group.project.categories;
//       const action = 'setGroupCategories';
 
//       actions.fetchGroupCategories({ dispatch }, groupId);
//       done();
//       expect(dispatch).toHaveBeenCalledWith(action, groupCategories);
//     });
//   });
 
//   describe('setGroupCategories action', () => {
//     let groupCategories;
 
//     beforeEach(() => {
//       groupCategories = [
//         {
//           id: 1,
//           name: 'Category 1',
//         },
//         {
//           id: 2,
//           name: 'Category 2',
//         },
//       ];
//       mutation = 'SET_GROUP_CATEGORIES';
//     });
 
//     test('It commits to SET_GROUP_CATEGORIES', () => {
//       actions.setGroupCategories({ commit }, groupCategories);
//       expect(commit).toHaveBeenCalledWith(mutation, groupCategories);
//     });
//   });
 
//   describe('createByCategory action', () => {
//     let schedulingData;
 
//     beforeEach(() => {
//       schedulingData = {
//         finalDate: '2017-09-09 10:00',
//         initialDate: '2017-09-09 10:00',
//         groupId: 1,
//         categoryId: 2,
//       };
//     });
 
//     test('It calls scheduling.createByCategory', () => {
//       jest.spyOn(scheduling, 'createByCategory');
//       actions.createByCategory({ commit }, schedulingData);
//       expect(scheduling.createByCategory).toHaveBeenCalledWith(schedulingData);
//     });
//   });
 
//   describe('updateByCategory action', () => {
//     let schedulingData;
 
//     beforeEach(() => {
//       schedulingData = {
//         id: 1,
//         finalDate: '2017-09-09 10:00',
//         initialDate: '2017-09-09 10:00',
//         groupId: 1,
//         created: {
//           id: 2,
//         },
//       };
//     });
 
//     test('It calls scheduling.updateByCategory', () => {
//       jest.spyOn(scheduling, 'updateByCategory');
//       actions.updateByCategory({ commit }, schedulingData);
//       expect(scheduling.updateByCategory).toHaveBeenCalledWith(schedulingData);
//     });
//   });
// });