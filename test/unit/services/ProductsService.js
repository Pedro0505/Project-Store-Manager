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

  const getAllMock = [
    {
      id: 1,
      name: 'Martelo de Thor',
      quantity: 10,
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
      quantity: 20,
    },
    {
      id: 3,
      name: 'Escudo do Capitão América',
      quantity: 30,
    },
  ];

  const resolveCreated = {
    id: 1,
    name: 'Batata',
    quantity: 20,
  };

  const createSucess = { 
    code: 201, 
    data: { 
      id: 1, 
      name: 'Batata', 
      quantity: 20 
    }, 
  };

  const createUnsuccessful = { 
    code: 409, 
    data: { 
      message: 'Product already exists' 
    } 
  };

  const getSucess = { 
    code: 200, 
    data: { 
      id: 1, 
      name: 'Martelo de Thor', 
      quantity: 10 
    }, 
  };

  const getIdUnsuccessful = { 
    code: 404, 
    data: { message: 'Product not found' } 
  };

  const editResolve = {
    id: 1,
    name: 'Batata',
    quantity: 20
  }

  const idResolve = {
    id: 1,
    name: 'Batata',
    quantity: 15
  }

  const updateSucess = {
    code: 200,
    data: {
      id: 1,
      name: 'Batata',
      quantity: 20
    }
  }


  describe('Testando o caso de sucesso de encontrar um produto por id', () => {
    
    before(() => {
      sinon.stub(ProductsModel, 'getProductsByIdModel').resolves(mockModelId);
    });

    after(() => {
      ProductsModel.getProductsByIdModel.restore();
    });

    it('Testando a busca de um produto pro id', async () => {
      const response = await ProductsService.SearchsProductsId(1);

      expect(response).to.be.deep.equal(getSucess);
    });
  });

  describe('Testando a criação do produto', () => {
  
    before(() => {
      sinon.stub(ProductsModel, 'createProductsModel').resolves(resolveCreated);
      sinon.stub(ProductsModel, 'getAllProductsModel').resolves(getAllMock);
    });

    after(() => {
      ProductsModel.createProductsModel.restore();
      ProductsModel.getAllProductsModel.restore();
    });

    it('Testando quando um produto é criado sem sucesso', async () => {
      const created = await ProductsService.CreateProducts(getAllMock[0].name, getAllMock[0].quantity)
    
      expect(created).to.be.deep.equal(createUnsuccessful)
    })

    it('Testando quando um produto é criado com sucesso', async () => {
      const created = await ProductsService.CreateProducts(resolveCreated.name, resolveCreated.quantity)
    
      expect(created).to.be.deep.equal(createSucess);
    })

  describe('Testando o caso de erro de encontrar um produto por id', () => {

    before(() => {
      sinon.stub(ProductsModel, 'getProductsByIdModel').resolves([]);
    });

    after(() => {
      ProductsModel.getProductsByIdModel.restore();
    });

    it('Testando a busca de um produto pro id ineixtente', async () => {
      const idResponse = await ProductsService.SearchsProductsId(99999);

      expect(idResponse).to.be.deep.equal(getIdUnsuccessful);
    });
  });
  });
  
  describe('Testando a edição do produto', () => {

    before(() => {
      sinon.stub(ProductsModel, 'getProductsByIdModel').resolves([idResolve]);
      sinon.stub(ProductsModel, 'updateProduct').resolves(editResolve);
    });

    after(() => {
      ProductsModel.getProductsByIdModel.restore();
      ProductsModel.updateProduct.restore();
    });

    it('Testando a edição de um produto', async () => {
      const updateResponse = await ProductsService.UpdatedProduct(1, 'Batata', 20);

      expect(updateResponse).to.be.deep.equal(updateSucess);
    });

    it('Testando a edição de um produto com id inexistente', async () => {
      const updateResponse = await ProductsService.UpdatedProduct(1000, 'Batata', 20);

      expect(updateResponse).to.be.deep.equal(getIdUnsuccessful);
    });
  });

  describe('Testando se o produto é deletado', () => {

    const row = { affectedRows: 1 };

    const deleteSucess = { code: 204, data: 'No Body' };

    before(() => {
      sinon.stub(ProductsModel, 'deleteProduct').resolves(row);
      sinon.stub(ProductsModel, 'getProductsByIdModel').resolves([idResolve]);
    });

    after(() => {
      ProductsModel.getProductsByIdModel.restore();
      ProductsModel.deleteProduct.restore();
    });

    it('Testando se um produto é deletado com sucesso', async () => {
      const deleted = await ProductsService.DeleteProduct(1);

      expect(deleted).to.be.deep.equal(deleteSucess);
    });
    it('Testando a exlusão de um produto com id inexistente', async () => {
      const updateResponse = await ProductsService.DeleteProduct(1000, 'Batata', 20);

      expect(updateResponse).to.be.deep.equal(getIdUnsuccessful);
    });
  });
});
