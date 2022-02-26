const SalesModel = require('../models/SalesModel');

const SalesNotExist = async (id) => {
  const result = await SalesModel.getSalesByIdModel(id);

  if (!result.length) return { code: 404, data: { message: 'Sale not found' } };

  const newResult = result.map((e) => ({
    date: e.date,
    productId: e.product_id,
    quantity: e.quantity,
  }));

  return { code: 200, data: newResult };
};

module.exports = SalesNotExist;
