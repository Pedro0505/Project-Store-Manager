const ProductsModel = require('../models/ProductsModel');

const DeleteProduct = async (id) => {
  const result = await ProductsModel.getProductsByIdModel(id);

  const findIndex = result.findIndex((e) => e.id === +id);

  if (findIndex === -1) return { code: 404, data: { message: 'Product not found' } };

  await ProductsModel.deleteProduct(id);

  return { code: 204, data: 'No Body' };
};

module.exports = DeleteProduct;
