const connections = require('./connections');

const getAllProductsModel = async () => {
  const QUERRY = 'SELECT * FROM StoreManager.products ORDER BY id;';
  const [result] = await connections.execute(QUERRY);

  return result;
};

const getProductsByIdModel = async (id) => {
  const QUERRY = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [result] = await connections.execute(QUERRY, [id]);

  return result;
};

module.exports = {
  getAllProductsModel,
  getProductsByIdModel,
};
