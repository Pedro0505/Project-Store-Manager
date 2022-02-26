const express = require('express');
const SalesControllers = require('../controllers');
const SalesMiddlewares = require('../middlewares');

const salesRoute = express.Router();

salesRoute.get('/', SalesControllers.getAllSales);
salesRoute.get('/:id', SalesControllers.getByIdSales);
salesRoute.post('/', 
SalesMiddlewares.SalesMiddleware,
SalesMiddlewares.ValidateQuantity, 
SalesControllers.CreateSale);
salesRoute.put('/:id', SalesMiddlewares.SalesMiddleware, SalesControllers.UpdateSale);
salesRoute.delete('/:id', SalesControllers.DeleteSales);

module.exports = salesRoute;
