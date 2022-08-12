const sinon = require('sinon');
const { expect } = require('chai');

const connections = require('../../../src/models/connections');
const ProductsModel = require('../../../src/models/ProductsModel');

describe('Testando a camada de productsmodel', () => {
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

  describe('Listar todos os produtos cadastrados', () => {
    before(() => {
      sinon.stub(connections, 'execute').resolves([getAllMock, []]);
    });

    after(() => {
      connections.execute.restore();
    });

    it('Testando o retorno da função getAllProducts', async () => {
      const products = await ProductsModel.getAllProductsModel();

      expect(products).to.be.an('array');
      expect(products).not.to.be.empty;
      products.forEach((ele) => {
        expect(ele).to.be.an('object');
      });
    });
    it('Testando se os itens listados possum as chaves id, name, quantity', async () => {
      const products = await ProductsModel.getAllProductsModel();

      products.forEach((ele) => {
        expect(ele).to.include.all.keys('id', 'name', 'quantity');
      });
    });
  });

  describe('Listar o item que corresponde a o id', () => {
    const getProductsByIdMock = {
      id: 1,
      name: 'Martelo de Thor',
      quantity: 10,
    };

    before(() => {
      sinon.stub(connections, 'execute').resolves([[getProductsByIdMock], []]);
    });

    after(() => {
      connections.execute.restore();
    });

    it('Teste se ao passar um id para a função ele retorna o produto com o id correspondente', async () => {
      const [productsId] = await ProductsModel.getProductsByIdModel(1);

      expect(productsId).to.be.an('object');
      expect(productsId.id).to.be.equal(1);
      expect(productsId).to.include.all.keys('id', 'name', 'quantity');
    });
  });

  describe('Testar a criação de um novo produto', () => {
    const createReturn = [{ insertId: 1 }];

    const createdProduct = {
      id: 1,
      name: 'Batata',
      quantity: 15,
    };

    before(() => {
      sinon.stub(connections, 'execute').resolves(createReturn, []);
    });

    after(() => {
      connections.execute.restore();
    });

    it('Se o produto foi criado com sucesso', async () => {
      const created = await ProductsModel.createProductsModel(createdProduct.name, createdProduct.quantity);
    
      expect(created).to.deep.equal(createdProduct);
    });
  });

  describe('Testar a edição de um produto', () => {
    const rows = [{ affectedRows: 1 }];

    const product = {
      id: 1,
      name: 'Batata',
      quantity: 15,
    };

    before(() => {
      sinon.stub(connections, 'execute').resolves(rows, []);
    });

    after(() => {
      connections.execute.restore();
    });

    it('Se o produto foi editado com sucesso', async () => {
      const created = await ProductsModel.updateProduct(product.id, product.name, product.quantity);
    
      expect(created).to.deep.equal(product);
    });
  });

  describe('Testar deletar um produto', () => {
    const rows = [{ affectedRows: 1 }];

    const product = {
      id: 1,
      name: 'Batata',
      quantity: 15,
    };

    before(() => {
      sinon.stub(connections, 'execute').resolves(rows, []);
    });

    after(() => {
      connections.execute.restore();
    });

    it('Se o produto foi deletado com sucesso', async () => {
      const deleted = await ProductsModel.deleteProduct(product.id, product.name, product.quantity);
    
      expect(deleted).to.deep.equal({ affectedRows: 1 });
    });
  });
});
