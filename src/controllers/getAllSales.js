const SalesModel = require('../models/SalesModel');

const getAllSales = async (_req, res) => {
  const result = await SalesModel.getAllSalesModel();

  const newResult = result.map((e) => ({
    saleId: e.sale_id,
    date: e.date,
    productId: e.product_id,
    quantity: e.quantity,
  }));

  return res.status(200).json(newResult);
};

module.exports = getAllSales;
