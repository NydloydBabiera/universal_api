
module.exports = function requestActions({ pool }) {
  return Object.freeze({
    createRequest,
    getAllRequest
  });

  async function createRequest(requestDetails) {
    const { userId, requestType, reasonRequest, medRequest, isApproved } =
    requestDetails;

    let sql = `INSERT INTO 
      request_information(user_id, request_type, 
        reason_request, med_request, is_approved)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    let param = [userId, requestType, reasonRequest, medRequest, isApproved];

    try {
      let result = await pool.query(sql, param);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  
  async function getAllRequest() {
    let sql = `select * from request_information`;

    try {
      let result = await pool.query(sql);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }
};
