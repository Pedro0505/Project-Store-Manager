const SalesModel = require('../models/SalesModel');

const SearchsSalesId = async (id) => {
  const result = await SalesModel.getSalesByIdModel(id);

  const newResult = result.map((e) => ({
    date: e.date,
    productId: e.product_id,
    quantity: e.quantity,
  }));

  if (!newResult.length) return { code: 404, data: { message: 'Sale not found' } };

  return { code: 200, data: newResult };
};

module.exports = SearchsSalesId;
