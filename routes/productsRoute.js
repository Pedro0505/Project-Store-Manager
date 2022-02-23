const express = require('express');
const ProductsController = require('../controllers');

const productsRoute = express.Router();

productsRoute.get('/', ProductsController.getAllProducts);

productsRoute.get('/:id', ProductsController.getByIdProduct);

module.exports = productsRoute;
