const ProductsService = require('../services');

const getByIdSales = async (req, res) => {
  const { id } = req.params;
  const { code, data } = await ProductsService.SalesNotExist(id);

  if (data.message) return res.status(code).json(data);

  return res.status(code).json(data);
};

module.exports = getByIdSales;
