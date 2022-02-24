const ProductsModel = require('../models/ProductsModel');

const UpdatedService = async (id, name, quantity) => {
  const result = await ProductsModel.getProductsByIdModel(id);

  const findIndex = result.findIndex((e) => e.id === +id);

  if (findIndex === -1) return { code: 404, data: { message: 'Product not found' } };

  const response = await ProductsModel.updateProduct(id, name, quantity);

  return { code: 200, data: response };
};

module.exports = UpdatedService;
