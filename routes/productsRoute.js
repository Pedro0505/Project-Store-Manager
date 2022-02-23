const express = require('express');
const ProductsController = require('../controllers');
const MiddlewaresProducts = require('../middlewares');

const productsRoute = express.Router();

productsRoute.use(MiddlewaresProducts.ProductMiddleware);

productsRoute.get('/', ProductsController.getAllProducts);
productsRoute.get('/:id', ProductsController.getByIdProduct);
productsRoute.post('/', (req, res) => (
  res.status(200).json({ oi: 'ii' })
));

module.exports = productsRoute;
