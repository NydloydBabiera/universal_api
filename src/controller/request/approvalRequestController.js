module.exports = function approvalRequest({ approvalRequestUC }) {
    return async function put(httpRequest) {
      try {

        const requestDetails = httpRequest.body;
        requestDetails.requestId = httpRequest.params.id;;
  
        // Usecase
        const result = await approvalRequestUC(requestDetails);
        if (result) {
          return {
            headers: {
              "Content-Type": "application/json",
            },
            status: 201,
            body: result, //,"Success!"
          };
        } else {
          return {
            headers: {
              "Content-Type": "application/json",
            },
            status: 400,
            body: result,
          };
        }
      } catch (e) {
        // Catch error
        return {
          headers: {
            "Content-Type": "application/json",
          },
          status: e.status ? e.status : 400,
          body: { errorMsg: e.message },
        };
      }
    };
  };
  