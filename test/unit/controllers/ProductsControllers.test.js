// const sinon = require('sinon');
// const { expect } = require('chai');

// const ProductsService = require('../../../services');
// const ProductControlller = require('../../../controllers');
// const ProductsModel = require('../../../models/ProductsModel');

// describe('Testando a camada de controller dos produtos', () => {

//   const getAllMock = [
//     {
//       id: 1,
//       name: 'Martelo de Thor',
//       quantity: 10,
//     },
//     {
//       id: 2,
//       name: 'Traje de encolhimento',
//       quantity: 20,
//     },
//     {
//       id: 3,
//       name: 'Escudo do Capitão América',
//       quantity: 30,
//     },
//   ];

//   describe('Testando a listagem de todos os produtos', () => {
//     const request = {};
//     const response = {};

//     before(() => {
//       request.body = {};

//       response.status = sinon.stub().returns(response);
//       response.json = sinon.stub().returns();

//       sinon.stub(ProductsModel, 'getAllProductsModel').resolves(getAllMock)
//     });

//     after(() => {
//       ProductsModel.getAllProductsModel.restore();
//     });

//     it('Teste se o status é chamado o valor 200 e o json é um array', async () => {
//       await ProductControlller.getAllProducts(request, response);

//       expect(response.status.calledWith(200)).to.be.true;
//       expect(response.json.calledWith(sinon.match.array)).to.be.true;
//     });
//   });

//   describe('Testando procurar um produto por id', () => { 

//     describe('Quando o id é valido', () => {
//       const request = {};
//       const response = {};

//       const mockService = { 
//         code: 200, 
//         data: {
//           id: 1,
//           name: 'Martelo de Thor',
//           quantity: 10
//         } 
//       };
  
//       before(() => {
//         request.body = {};
  
//         request.params = sinon.stub().returns({ id: 1 })
//         response.status = sinon.stub().returns(response);
//         response.json = sinon.stub().returns();
  
//         sinon.stub(ProductsService, 'ProductNotExist').resolves(mockService)
//       });
  
//       after(() => {
//         ProductsService.ProductNotExist.restore();
//       });
  
//       it('Testando se o code está certo e o resultado', async () => {
//         await ProductControlller.getByIdProduct(request, response);

//         const [[content]] = response.json.args;

//         expect(response.status.calledWith(200)).to.be.true;
//         expect(content).to.be.deep.equal({ id: 1, name: 'Martelo de Thor', quantity: 10 });
//       });
//     });

//     describe('Quando o id é invalido', () => {
//       const request = {};
//       const response = {};
  
//       before(() => {
//         request.body = {};
  
//         request.params = sinon.stub().returns({ id: 12121 })
//         response.status = sinon.stub().returns(response);
//         response.json = sinon.stub().returns();

//         sinon.stub(ProductsService, 'ProductNotExist').resolves( { code: 404, data: { message: 'Product not found' } })
//       });
  
//       after(() => {
//         ProductsService.ProductNotExist.restore();
//       });
  
//       it('Testando o code e o resultado', async () => {
//         await ProductControlller.getByIdProduct(request, response);

//         const [[content]] = response.json.args;
        
//         expect(response.status.calledWith(404)).to.be.true;
//         expect(content).to.be.deep.equal({ message: 'Product not found' });
//       });
//     });
//    })
// });
