const getAllProducts = require('./getAllProducts');
const getAllSales = require('./getAllSales');
const getByIdProduct = require('./getByIdProduct');
const getByIdSales = require('./getByIdSales');
const CreateProduct = require('./CreateProduct');
const UpdateProducts = require('./UpdateProducts');
const DeleteProduct = require('./DeleteProduct');

module.exports = {
  getAllProducts,
  getAllSales,
  getByIdSales,
  getByIdProduct,
  CreateProduct,
  UpdateProducts,
  DeleteProduct,
};
