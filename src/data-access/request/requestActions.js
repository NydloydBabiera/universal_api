module.exports = function requestActions({ pool }) {
  return Object.freeze({
    createRequest,
    getAllRequest,
    approvalExplanation,
    approvalRequest,
    getUserRequest,
    updateRequest
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

  async function getUserRequest(user_id){

    let sql = `select * from request_information
    where user_id = $1 and is_consume is null`;
let param = [user_id];
    try {
      let result = await pool.query(sql, param);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function updateRequest(user_id){

    let sql = `update request_information
    set is_consume = true
    where user_id = $1 and is_consume is null;`;
let param = [user_id];
    try {
      let result = await pool.query(sql, param);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }


  async function approvalRequest(requestDetails) {
    const { isApproved, requestId } = requestDetails;
    let sql = `update request_information set is_approved = $1
    where request_id = $2 RETURNING *`;
    let param = [isApproved, requestId];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("error:", error);
    }
  }

  async function approvalExplanation(requestDetails) {
    const { explanation, requestId } = requestDetails;
    let sql = `INSERT INTO approval_request(request_id, explanation, decision_date)
    VALUES ($1, $2, NOW()) RETURNING *`;
    let param = [requestId, explanation];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("error:", error);
    }
  }
};
