const SalesModel = require('../models/SalesModel');

const DeleteSale = async (id) => {
  const response = await SalesModel.getSalesByIdModel(id);

  if (!response.length) return { code: 404, data: { message: 'Sale not found' } };

  await SalesModel.DeleteSale(id);

  return { code: 204, data: 'No Body' };
};

module.exports = DeleteSale;
