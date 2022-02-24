const SaleService = require('../services');

const UpdateSale = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);

  const { code, data } = await SaleService.UpdateSale(id, req.body);

  if (data.message) return res.status(code).json(data);

  return res.status(code).json(data);
};

module.exports = UpdateSale;
