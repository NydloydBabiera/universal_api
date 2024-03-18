module.exports = function createRequestUC({ requestDataAccess }) {
  return async function createRequest(requestDetails) {
    //validation if limit of medicine exceeds
    if(requestDetails.requestType.toLowerCase() === "emergency"){
      requestDetails.isApproved = true;
    }

    const result = await requestDataAccess.createRequest(requestDetails);

    return {
      message: "Request sent, please wait for approval",
      result,
    };
  };
};
