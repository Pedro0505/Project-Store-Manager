const express = require('express');
const SalesControllers = require('../controllers');

const salesRoute = express.Router();

salesRoute.get('/', SalesControllers.getAllSales);

salesRoute.get('/:id', SalesControllers.getByIdSales);

module.exports = salesRoute;
