module.exports = function getUserRequestUC({ requestDataAccess }) {
  return async function getUserRequest(user_id) {
    //validation if complete details entities
    let returnMsg;
    const request = await requestDataAccess.getUserRequest(user_id);
    
    if (request.rows.length  == 0) {
      returnMsg = "No request found!";
      return;
    }
    if (
      !request.rows[0].is_approved &&
      request.rows[0].request_type === "NORMAL"
    ) {
      returnMsg = "Request is not yet approved!";
      return;
    }
    switch (request.rows[0].med_request) {
      case "1":
        returnMsg = "BIOGESIC";
        break;
      case "2":
        returnMsg = "NEOZEP";
        break;
      case "3":
        returnMsg = "TUSERAN";
        break;
      case "4":
        returnMsg = "MEFENAMIC";
        break;
      case "5":
        returnMsg = "BIOFLU";
        break;
      default:
        break;
    }
    await requestDataAccess.updateRequest(user_id);
    return returnMsg;
  };
};
