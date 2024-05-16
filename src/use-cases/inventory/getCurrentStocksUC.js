module.exports = function getCurrentStocksUC({ inventoryDataAccess }) {
    return async function getAllStocks(itemCode) {
      //validation if complete details entities
      const request = await inventoryDataAccess.getCurrentStocks(itemCode);
      return { data: request.rows };
    };
  };
  