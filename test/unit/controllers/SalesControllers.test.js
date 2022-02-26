// const sinon = require('sinon');
// const { expect } = require('chai');

// const SalesService = require('../../../services');
// const SalesControlller = require('../../../controllers');
// const SalesModel = require('../../../models/SalesModel');

// describe('Testando a camada salesController', () => {

//   describe('Testando a listagem de todos os produtos', () => {

//     const getAllMock = [
//       {
//         saleId: 1,
//         date: '2022-02-26T01:06:41.000Z',
//         productId: 1,
//         quantity: 5
//       },
//       {
//         saleId: 1,
//         date: '2022-02-26T01:06:41.000Z',
//         productId: 2,
//         quantity: 10
//       },
//       {
//         saleId: 2,
//         date: '2022-02-26T01:06:41.000Z',
//         productId: 3,
//         quantity: 15
//       }
//     ]
  
//     const request = {};
//     const response = {};

//     before(() => {
//       request.body = {};

//       response.status = sinon.stub().returns(response);
//       response.json = sinon.stub().returns();

//       sinon.stub(SalesModel, 'getAllSalesModel').resolves(getAllMock)
//     });

//     after(() => {
//       SalesModel.getAllSalesModel.restore();
//     });

//     it('Teste se o status é chamado o valor 200 e o json é um array', async () => {
//       await SalesControlller.getAllSales(request, response);

//       expect(response.status.calledWith(200)).to.be.true;
//       expect(response.json.calledWith(sinon.match.array)).to.be.true;
//     });
//   });

// });
