const express = require('express');
const SalesControllers = require('../controllers');
const MiddlewaresSales = require('../middlewares');

const salesRoute = express.Router();

salesRoute.use(MiddlewaresSales.SalesMiddleware);

salesRoute.get('/', SalesControllers.getAllSales);
salesRoute.get('/:id', SalesControllers.getByIdSales);
salesRoute.post('/');

module.exports = salesRoute;
