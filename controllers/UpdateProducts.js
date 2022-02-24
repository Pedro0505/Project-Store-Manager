const ProductsService = require('../services');

const UpdateProducts = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const { code, data } = await ProductsService.UpdatedService(id, name, quantity);

  if (data.message) return res.status(code).json(data);

  return res.status(code).json(data);
};

module.exports = UpdateProducts;
