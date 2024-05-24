module.exports = function createRequestUC({ requestDataAccess }) {
  return async function createRequest(requestDetails) {
    //validation if limit of medicine exceeds
    let msg = "";
    let result;
    const checkRequest = await requestDataAccess.countRequest(requestDetails.userId);
    console.log(checkRequest[0]);
    if (checkRequest[0].count >= 3) {
      msg = "Limit request per day exceeds";
    } else {
      if (requestDetails.requestType.toLowerCase() === "emergency") {
        requestDetails.isApproved = true;
      }

      result = await requestDataAccess.createRequest(requestDetails);
      msg = "Request sent, please wait for approval";
    }

    return {
      message: msg,
      result,
    };
  };
};
