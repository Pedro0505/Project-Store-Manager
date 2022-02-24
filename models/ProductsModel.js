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

const createProductsModel = async (name, quantity) => {
  const QUERRY = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?);';
  const [result] = await connections.execute(QUERRY, [name, quantity]);

  return {
    id: result.insertId,
    name,
    quantity,
  };
};

const updateProduct = async (id, name, quantity) => {
  const QUERRY = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?';
  await connections.execute(QUERRY, [name, quantity, id]);

  return {
    id,
    name,
    quantity,
  };
};

const deleteProduct = async (id) => {
  await connections.execute(
    'DELETE FROM StoreManager.products WHERE id = ?;',
    [id],
  );
};

module.exports = {
  getAllProductsModel,
  getProductsByIdModel,
  createProductsModel,
  updateProduct,
  deleteProduct,
};
