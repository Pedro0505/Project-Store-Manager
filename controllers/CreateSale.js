const SalesModel = require('../models/SalesModel'); 

const CreateSale = async (req, res) => {
  const { id } = await SalesModel.createSale();

  req.body.map(async ({ productId, quantity }) => {
    await SalesModel.createSaleProduct({ productId, quantity, id });
  });

  const objCreated = {
    id,
    itemsSold: [
      ...req.body,
    ],
  };

  return res.status(201).json(objCreated);
};

module.exports = CreateSale;
