const SalesModel = require('../models/SalesModel');
const ProductsModel = require('../models/ProductsModel');

const UpdateQuantityPost = async (sales) => {
  const allProducts = await ProductsModel.getAllProductsModel();

  const arr = [];

  sales.forEach(({ productId, quantity }) => {
    const find = allProducts.find((e) => e.id === productId);
    
    const value = find.quantity - quantity;
    
    arr.push({ id: productId, quantity: value });
  });

  await Promise.all(arr.map(async (e) => {
    await SalesModel.UpdateQuantity(e.quantity, e.id);
  }));
};

module.exports = UpdateQuantityPost;
