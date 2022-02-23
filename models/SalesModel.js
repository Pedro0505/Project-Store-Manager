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

module.exports = {
  getAllSalesModel,
  getSalesByIdModel,
};
