const express = require('express');
const ProductsController = require('../controllers');
const ProductsMiddlewares = require('../middlewares');
const ProductsService = require('../services');

const productsRoute = express.Router();

productsRoute.get('/', ProductsController.getAllProducts);
productsRoute.get('/:id', ProductsController.getByIdProduct);
productsRoute.post('/', ProductsMiddlewares.ProductMiddleware, ProductsController.CreateProduct);
productsRoute.put('/:id', ProductsMiddlewares.ProductMiddleware, async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const { code, data } = await ProductsService.UpdatedService(id, name, quantity);

  if (data.message) return res.status(code).json(data);

  return res.status(code).json(data);
});

module.exports = productsRoute;
