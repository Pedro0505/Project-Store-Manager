const express = require('express');
const SalesControllers = require('../controllers');
const MiddlewaresSales = require('../middlewares');

const salesRoute = express.Router();

salesRoute.get('/', SalesControllers.getAllSales);
salesRoute.get('/:id', SalesControllers.getByIdSales);
salesRoute.post('/', MiddlewaresSales.SalesMiddleware);
salesRoute.put('/:id', MiddlewaresSales.SalesMiddleware);

module.exports = salesRoute;
