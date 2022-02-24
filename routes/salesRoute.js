const express = require('express');
const SalesControllers = require('../controllers');
const SalesMiddlewares = require('../middlewares');

const salesRoute = express.Router();

salesRoute.get('/', SalesControllers.getAllSales);
salesRoute.get('/:id', SalesControllers.getByIdSales);
salesRoute.post('/', SalesMiddlewares.SalesMiddleware, SalesControllers.CreateSale);
salesRoute.put('/:id', SalesMiddlewares.SalesMiddleware);

module.exports = salesRoute;
