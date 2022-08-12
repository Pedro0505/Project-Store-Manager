const SalesModel = require('../models/SalesModel');
const UpdateQuantityDelete = require('./UpdateQuantityDelete');

const DeleteSale = async (id) => {
  const response = await SalesModel.getSalesByIdModel(id);

  if (!response.length) return { code: 404, data: { message: 'Sale not found' } };

  await UpdateQuantityDelete(id);

  await SalesModel.DeleteSale(id);

  return { code: 204, data: 'No Body' };
};

module.exports = DeleteSale;
