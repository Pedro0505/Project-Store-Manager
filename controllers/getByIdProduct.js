const ProductsService = require('../services');

const getByIdProducts = async (req, res) => {
  const { id } = req.params;
  const { code, data } = await ProductsService.SearchsProductsId(id);

  if (data.message) return res.status(code).json(data);

  return res.status(code).json(data);
};

module.exports = getByIdProducts;
