const SalesService = require('../services');

const DeleteSale = async (req, res) => {
  const { id } = req.params;

  const { code, data } = await SalesService.DeleteSale(id);

  if (data.message) return res.status(code).json(data);

  return res.status(code).end();
};

module.exports = DeleteSale;
