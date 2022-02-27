const ProductsModel = require('../models/ProductsModel');

const ValidateQuantity = async (req, res, next) => {
  const allProducts = await ProductsModel.getAllProductsModel();

  const [valueQuantity] = req.body.map(({ productId, quantity }) => {
    const find = allProducts.find((e) => e.id === productId);
    
    return find.quantity - quantity;
  });

  if (valueQuantity < 0) {
    return res.status(422).json({ message: 'Such amount is not permitted to sell' });
  }

  next();
};

module.exports = ValidateQuantity;
