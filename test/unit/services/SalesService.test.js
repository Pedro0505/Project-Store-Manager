const sinon = require('sinon');
const { expect } = require('chai');

const SalesModel = require('../../../models/SalesModel');
const SalesService = require('../../../services');


describe('Teste da camada saleService', () => {

  describe('Testando a busca de venda por id', () => {

    const sucessGet = [
      {
        product_id: 1,
        quantity: 5,
        sale_id: 1,
        date: '2022-02-25T20:34:46.000Z',
      },
      {
        product_id: 2,
        quantity: 10,
        sale_id: 1,
        date: '2022-02-25T20:34:46.000Z',
      }
    ];

    const responseGet = { 
      code: 200, 
      data: [
      { date: '2022-02-25T20:34:46.000Z', productId: 1, quantity: 5 },
      { date: '2022-02-25T20:34:46.000Z', productId: 2, quantity: 10 }
      ] 
    } 

    describe('Teste da busca em caso de sucesso', async () => {


      before(() => {
        sinon.stub(SalesModel, 'getSalesByIdModel').resolves(sucessGet);
      });
  
      after(() => {
        SalesModel.getSalesByIdModel.restore();
      });

      it('Teste com um id valido', async () => {
        const response = await SalesService.SalesNotExist(1);

        expect(response).to.be.deep.equal(responseGet);
      });
    });

    describe('Teste da busca em caso de erro', () => {
      const unsuccessfulGet = { code: 404, data: { message: 'Sale not found' } };

      before(() => {
        sinon.stub(SalesModel, 'getSalesByIdModel').resolves([]);
      });
  
      after(() => {
        SalesModel.getSalesByIdModel.restore();
      });

      it('Teste com um id invalido', async () => {
        const response = await SalesService.SalesNotExist(1020304);

        expect(response).to.be.deep.equal(unsuccessfulGet);
      });
    });
  });
  // describe('Testando se a venda é editada com sucesso', () => {

  //   describe('Testando quando o id não é passado', () => {
  //     const undefinedId = { code: 404, data: { message: 'Id Not Found' } };
  //     it('Quando o id vem undefined', async () => {
  //       const response = await SalesService.UpdateSale(undefined, [{ productId: 1, quantity: 10 }]);

  //       expect(response).to.be.deep.equal(undefinedId)
  //     });
  //   });

  //   describe('Testando quando os elementos a serem editados estão no formato errado', () => {
  //     const validQuantity = { code: 400, data: { message: 'Quantity must be an integer and greater than 0' } };

  //     it('A quantidade passada é valida', async () => {
  //       const response = await SalesService.UpdateSale(1, [{ productId: 1, quantity: 0 }]);

  //       expect(response).to.be.deep.equal(validQuantity)
  //     })
  //   });

  //   describe('Teste quando a edição ocorre certa', () => {
  //     const mockUpdate = {
  //       saleId: 1,
  //       itemUpdated: [
  //         {
  //           productId: 2,
  //           quantity: 20,
  //         },
  //       ],
  //     };

  //     const updateSucess = { code: 200, data: mockUpdate }

  //     before(() => {
  //       sinon.stub(SalesModel, 'updateSale').resolves(mockUpdate);
  //     });
  
  //     after(() => {
  //       SalesModel.updateSale.restore();
  //     });

  //     it('Ao passar informações validas ocorre a edição', async () => {
  //       const response = await SalesService.UpdateSale(1, [{ productId: 2, quantity: 20 }])

  //       expect(response).to.be.deep.equal(updateSucess)
  //     })
  //   });
  // });
});
