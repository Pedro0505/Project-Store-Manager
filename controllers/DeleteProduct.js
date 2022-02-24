const ProductService = require('../services');

const DeleteProduct = async (req, res) => {
  const { id } = req.params;

  const { code, data } = await ProductService.DeleteProduct(id);

  if (data.message) return res.status(code).json(data);

  return res.status(code).end();
};

module.exports = DeleteProduct;
