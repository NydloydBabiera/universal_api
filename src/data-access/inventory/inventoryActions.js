module.exports = function inventoryActions({ pool }) {
  return Object.freeze({
    getCurrentStocks,
    insertItem,
    updateStocks,
    getAllStocks,
  });

  async function getCurrentStocks(itemCode) {
    let sql = `select * from medicine_stocks where item_code = $1`;

    let param = [itemCode];
    try {
      let result = await pool.query(sql, param);
      return result;
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  async function getAllStocks() {
    let sql = `select * from medicine_stocks`;

    try {
      let result = await pool.query(sql);
      return result;
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  async function insertItem(itemDetails) {
    const { medName, itemCode, description } = itemDetails;

    let sql = `INSERT INTO public.medicine_stocks(med_name, item_code, 
            description)
            VALUES ($1, $2, $3)`;

    let param = [medName, itemCode, description];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:".error);
    }
  }

  async function updateStocks(itemDetails) {
    const { itemCode, newCnt } = itemDetails;

    let sql = `UPDATE public.medicine_stocks
        SET stock_count= $2
        WHERE item_code = $1`;

    let param = [itemCode, newCnt];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }
};
