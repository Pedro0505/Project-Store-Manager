const express = require('express');
const ProductsController = require('../controllers');
const ProductsMiddlewares = require('../middlewares');

const productsRoute = express.Router();

productsRoute.get('/', ProductsController.getAllProducts);
productsRoute.get('/:id', ProductsController.getByIdProduct);
productsRoute.post('/', ProductsMiddlewares.ProductMiddleware, ProductsController.CreateProduct);
productsRoute.put('/:id', ProductsMiddlewares.ProductMiddleware, ProductsController.UpdateProducts);
productsRoute.delete('/:id', ProductsController.DeleteProduct);

module.exports = productsRoute;
