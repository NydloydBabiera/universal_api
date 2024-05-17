module.exports = function getAllStocksUC({ inventoryDataAccess }) {
    return async function getAllStocks() {
      
      const request = await inventoryDataAccess.getAllStocks();
      return data = {data: request.rows};
    };
  };
  
  