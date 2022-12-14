const connections = require('./connections');

const getAllSalesModel = async () => {
  const QUERRY = `SELECT SP.product_id, SP.quantity, SP.sale_id, S.date
  FROM StoreManager.sales_products AS SP INNER JOIN
  StoreManager.sales AS S ON SP.sale_id = S.id ORDER BY SP.sale_id , SP.product_id;`;
  const [result] = await connections.execute(QUERRY);

  return result;
};

const getSalesByIdModel = async (id) => {
  const QUERRY = `SELECT SP.product_id, SP.quantity, SP.sale_id, S.date FROM 
  StoreManager.sales_products AS SP INNER JOIN StoreManager.sales AS S ON SP.sale_id = S.id
  WHERE SP.sale_id = ? ORDER BY SP.sale_id , SP.product_id;`;
  const [result] = await connections.execute(QUERRY, [id]);

  return result;
};

const createSaleProduct = async ({ productId, quantity, id }) => {
  const QUERRY = `INSERT INTO StoreManager.sales_products 
  (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
  const [created] = await connections.execute(QUERRY, [id, productId, quantity]);

  return {
    id: created.insertId,
  };
};

const createSale = async () => {
  const QUERRY = 'INSERT INTO StoreManager.sales () VALUES ();';

  const [created] = await connections.execute(QUERRY);

  return {
    id: created.insertId,
  };
};

const updateSale = async (id, productId, quantity) => {
  const QUERRY = `UPDATE StoreManager.sales_products SET product_id = ?, quantity = ? 
  WHERE sale_id = ?;`;

  await connections.execute(QUERRY, [productId, quantity, id]);

  return {
    saleId: id,
    itemUpdated: [
      {
        productId,
        quantity,
      },
    ],
  };
};

const DeleteSale = async (id) => {
  const QUERRY = 'DELETE FROM StoreManager.sales_products WHERE sale_id = ?;';

  await connections.execute(QUERRY, [id]);
};

const UpdateQuantity = async (quantity, id) => {
  const QUERRY = 'UPDATE StoreManager.products SET quantity = ? WHERE id = ?;';

  await connections.execute(QUERRY, [quantity, id]);
};

module.exports = {
  getAllSalesModel,
  getSalesByIdModel,
  createSale,
  createSaleProduct,
  updateSale,
  DeleteSale,
  UpdateQuantity,
};
