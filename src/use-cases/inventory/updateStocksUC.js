module.exports = function updateStocksUC({ inventoryDataAccess }) {
  return async function updateStocks(itemDetails) {
    const currStock = inventoryDataAccess.getCurrentStocks(
      itemDetails.itemCode
    );

    if (currStock < itemDetails.cnt) {
      throw new Error("Not enough stocks");
    }
    var newStock = currStock - itemDetails.cnt;

    itemDetails.newCnt = newStock;
    const result = await inventoryDataAccess.updateStocks(itemDetails);

    return {
      message: "Stock updated",
      result,
    };
  };
};
