module.exports = function approvalRequest({ requestDataAccess }) {
  return async function createRequest(requestDetails) {
    //validation of entries

    const requestDecision = await requestDataAccess.approvalRequest(
      requestDetails
    );

    const explanation = await requestDataAccess.approvalExplanation(
      requestDetails
    );
    
    const data = {
        requestDecision: requestDecision.rows,
        explanation: explanation.rows
    }

    return data;
 
  };
};
