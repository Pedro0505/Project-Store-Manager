const ProductsModel = require('../models/ProductsModel');

const SearchsProductsId = async (id) => {
  const result = await ProductsModel.getProductsByIdModel(id);

  const findIndex = result.findIndex((e) => e.id === +id);

  if (findIndex === -1) return { code: 404, data: { message: 'Product not found' } };

  return { code: 200, data: result[findIndex] };
};

module.exports = SearchsProductsId;
