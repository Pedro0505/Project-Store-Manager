const SalesModel = require('../models/SalesModel'); 
const SalesService = require('../services'); 

const CreateSale = async (req, res) => {
  const { id } = await SalesModel.createSale();

  await Promise.all(req.body.map(async ({ productId, quantity }) => {
    await SalesModel.createSaleProduct({ productId, quantity, id });
  }));

  await SalesService.UpdateQuantityPost(req.body);

  const objCreated = {
    id,
    itemsSold: [
      ...req.body,
    ],
  };

  return res.status(201).json(objCreated);
};

module.exports = CreateSale;
