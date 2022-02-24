const ProductSevice = require('../services');

const CreateProduct = async (req, res) => {
  const { name, quantity } = req.body;

  const { code, data } = await ProductSevice.CreateProducts(name, quantity);

  if (data.message) return res.status(code).json(data);

  return res.status(code).json(data);
};

module.exports = CreateProduct;
