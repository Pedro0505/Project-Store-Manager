const SalesModel = require('../models/SalesModel');
const ProductsModel = require('../models/ProductsModel');

const UpdateQuantityDelete = async (id) => {
  const getSaleByID = await SalesModel.getSalesByIdModel(id);
  const allProducts = await ProductsModel.getAllProductsModel();

  const arrUpdate = getSaleByID.map(({ product_id: productId, quantity }) => {
    const find = allProducts.find((e) => e.id === productId);

    const value = find.quantity + quantity;
  
    return { id: productId, quantity: value };
  });

  await Promise.all(arrUpdate.map(async (e) => {
    await SalesModel.UpdateQuantity(e.quantity, e.id);
  }));
};

module.exports = UpdateQuantityDelete;
