const sinon = require('sinon');
const { expect } = require('chai');

const connections = require('../../../models/connections');
const SalesModel = require('../../../models/SalesModel');

describe('Testando a camada de salesmodel', () => {
  const getAllMock = [
    {
      product_id: 1,
      quantity: 5,
      sale_id: 1,
      date: '2022-02-25T11:51:55.000Z'
    },
    {
      product_id: 2,
      quantity: 10,
      sale_id: 1,
      date: '2022-02-25T11:51:55.000Z'
    },
    {
      product_id: 3,
      quantity: 15,
      sale_id: 2,
      date: '2022-02-25T11:51:55.000Z'
    }
  ];

  describe('Listar todos os produtos cadastrados', () => {
    before(() => {
      sinon.stub(connections, 'execute').resolves([getAllMock, []]);
    });

    after(() => {
      connections.execute.restore();
    });

    it('Testando o retorno da função getAllSales', async () => {
      const result = await SalesModel.getAllSalesModel();

      expect(result).not.to.be.empty;
      expect(result).to.be.an('array');
      expect(result).to.deep.equal(getAllMock);
    });
  
    it('Testando se os itens listados possum as chaves saleId, date, productId, quantity', async () => {
      const result = await SalesModel.getAllSalesModel();

      result.forEach((ele) => {
        expect(ele).to.include.all.keys('sale_id', 'date', 'product_id', 'quantity');
      });
    });
  });

  describe('Listar o item que corresponde a o id', () => {
    const getSaleByIdMock = [
      {
        product_id: 1,
        quantity: 5,
        sale_id: 1,
        date: '2022-02-25T11:51:55.000Z'
      },
      {
        product_id: 2,
        quantity: 10,
        sale_id: 1,
        date: '2022-02-25T11:51:55.000Z'
      }
    ];

    before(() => {
      sinon.stub(connections, 'execute').resolves([[getSaleByIdMock], []]);
    });

    after(() => {
      connections.execute.restore();
    });

    it('Teste se ao passar um id para a função ele retorna uma venda com o id correspondente', async () => {
      const [saleId] = await SalesModel.getSalesByIdModel(1);

      expect(saleId).to.be.an('array');
      saleId.forEach((ele) => {
        expect(ele).to.include.all.keys('sale_id', 'date', 'product_id', 'quantity');
        expect(ele).to.be.an('object');
        expect(ele.sale_id).to.be.equal(1);
      });
    });
  });

  describe('Testar a criação de uma nova venda', () => {
    const createReturn = [{ insertId: 1 }];

    const createdSale = {
      productId: 1,
      quantity: 10,
      id: 2,
    }

    before(() => {
      sinon.stub(connections, 'execute').resolves(createReturn, []);
    });

    after(() => {
      connections.execute.restore();
    });

    it('Se a venda do produto foi criado com sucesso', async () => {
      const created = await SalesModel.createSale(createdSale);

      expect(createReturn[0].insertId).to.be.equal(created.id);
    })

    it('Se a venda foi criada com sucesso', async () => {
      const created = await SalesModel.createSaleProduct(createdSale);

      expect(createReturn[0].insertId).to.be.equal(created.id);
    })
  });

  describe('Testar a edição de uma venda', () => {
    const rows = [{ affectedRows: 1 }];

    const sale = {
      saleId: 1,
      itemUpdated: [
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };

    before(() => {
      sinon.stub(connections, 'execute').resolves(rows, []);
    });

    after(() => {
      connections.execute.restore();
    });

    it('Se a venda foi editada com sucesso', async () => {
      const created = await SalesModel.updateSale(sale.saleId, sale.itemUpdated[0].productId, sale.itemUpdated[0].quantity);
    
      expect(created).to.deep.equal(sale);
    });
  });
});
