module.exports = function updateStocksUC({ inventoryDataAccess }) {
  return async function updateStocks(itemDetails) {
    const currStock = await inventoryDataAccess.getCurrentStocks(
      itemDetails.itemCode
    );


    // if (currStock.rows[0].stock_count < itemDetails.cnt) {
    //   throw new Error("Not enough stocks");
    // }
    // var newStock = currStock.rows[0].stock_count - itemDetails.cnt;
    // itemDetails.newCnt = newStock;
    
    const result = await inventoryDataAccess.updateStocks(itemDetails);

    return {
      message: "Stock updated",
      result,
    };
  };
};
