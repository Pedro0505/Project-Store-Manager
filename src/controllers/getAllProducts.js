const ProductsModel = require('../models/ProductsModel');

const getAllProducts = async (_req, res) => {
  const result = await ProductsModel.getAllProductsModel();

  return res.status(200).json(result);
};

module.exports = getAllProducts;
