module.exports = function createRequestUC({ requestDataAccess }) {
  return async function createRequest(requestDetails) {
    //validation if complete details entities
    requestDetails.isApproved = false;
    const result = await requestDataAccess.createRequest(requestDetails);

    return {
      message: "Request sent, please wait for approval",
      result,
    };
  };
};
