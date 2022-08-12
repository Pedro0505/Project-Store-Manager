const SaleModel = require('../models/SalesModel');

const UpdateSale = async (id, [{ productId, quantity }]) => {
  if (!id) return { code: 404, data: { message: 'Id Not Found' } };
  
  if (+quantity <= 0) {
    return { code: 400, data: { message: 'Quantity must be an integer and greater than 0' } };
  }

  const result = await SaleModel.updateSale(id, productId, quantity);

  return { code: 200, data: result };
};

module.exports = UpdateSale;
