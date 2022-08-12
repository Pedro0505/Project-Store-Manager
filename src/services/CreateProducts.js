const ProductsModel = require('../models/ProductsModel');

const CreateProducts = async (name, quantity) => {
  const allProducts = await ProductsModel.getAllProductsModel();

  const exist = allProducts.some((e) => e.name === name);

  if (exist) return { code: 409, data: { message: 'Product already exists' } };

  const created = await ProductsModel.createProductsModel(name, quantity);

  return { code: 201, data: created };
};

module.exports = CreateProducts;
