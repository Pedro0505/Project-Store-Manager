const sinon = require('sinon');
const { expect } = require('chai');

const ProductsModel = require('../../../models/ProductsModel');
const ProductsService = require('../../../services');

describe('Testando a camada de ProductsService', () => {

  const mockModelId = [
    { 
      id: 1,
      name: 'Martelo de Thor',
      quantity: 10 
    }
  ];

  describe('Testando o caso de sucesso de encontrar um produto por id', () => {

    const sucessResponse = { 
      code: 200, 
      data: { 
        id: 1, 
        name: 'Martelo de Thor', 
        quantity: 10 
      }, 
    };
    
    before(() => {
      sinon.stub(ProductsModel, 'getProductsByIdModel').resolves(mockModelId);
    });

    after(() => {
      ProductsModel.getProductsByIdModel.restore();
    });

    it('Testando a busca de um produto pro id', async () => {
      const response = await ProductsService.ProductNotExist(1);

      expect(response).to.be.deep.equal(sucessResponse);
    });
  });

  describe('Testando o caso de erro de encontrar um produto por id', () => {
    const unsuccessfulResponse = { 
      code: 404, 
      data: { message: 'Product not found' } 
    }
    
    before(() => {
      sinon.stub(ProductsModel, 'getProductsByIdModel').resolves(mockModelId);
    });

    after(() => {
      ProductsModel.getProductsByIdModel.restore();
    });

    it('Testando a busca de um produto pro id', async () => {
      const idResponse = await ProductsService.ProductNotExist(99999);
      const createResponse = await ProductsService.UpdatedProduct(99999, 'batata', 10);
      const deleteResponse = await ProductsService.DeleteProduct(99999);

      expect(idResponse).to.be.deep.equal(unsuccessfulResponse);
      expect(createResponse).to.be.deep.equal(unsuccessfulResponse);
      expect(deleteResponse).to.be.deep.equal(unsuccessfulResponse);
    });
  });

  // describe('Testando a criação do produto', () => {
  //   const resolveCreated = {
  //     id: 1,
  //     name: 'Batata',
  //     quantity: 20,
  //   };

  //   before(() => {
  //     sinon.stub(ProductsModel, 'createProductsModel').resolves(resolveCreated);
  //   });

  //   after(() => {
  //     ProductsModel.createProductsModel.restore();
  //   });

  //   it('Teste a criação bem sucedida', async () => {
  //     const responseCreated = await ProductsService.CreateProducts('Batata', 20);

  //     console.log(responseCreated);
  //   });
  // });
});
