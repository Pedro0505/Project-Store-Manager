const getAllProducts = require('./getAllProducts');
const getAllSales = require('./getAllSales');
const getByIdProduct = require('./getByIdProduct');
const getByIdSales = require('./getByIdSales');
const CreateProduct = require('./CreateProduct');
const UpdateProducts = require('./UpdateProducts');
const DeleteProduct = require('./DeleteProduct');
const CreateSale = require('./CreateSale');
const UpdateSale = require('./UpdateSale');

module.exports = {
  getAllProducts,
  getAllSales,
  getByIdSales,
  getByIdProduct,
  CreateProduct,
  UpdateProducts,
  DeleteProduct,
  CreateSale,
  UpdateSale,
};
