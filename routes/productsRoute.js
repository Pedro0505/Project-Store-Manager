const express = require('express');
const ProductsController = require('../controllers');
const MiddlewaresProducts = require('../middlewares');

const productsRoute = express.Router();

productsRoute.get('/', ProductsController.getAllProducts);
productsRoute.get('/:id', ProductsController.getByIdProduct);
productsRoute.post('/', MiddlewaresProducts.ProductMiddleware, ProductsController.CreateProduct);
productsRoute.put('/:id', MiddlewaresProducts.ProductMiddleware);

module.exports = productsRoute;
