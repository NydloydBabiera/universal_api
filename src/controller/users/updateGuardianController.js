module.exports = function updateUser({ updateUserUC }) {
    return async function put(httpRequest) {
      try {
        const details = httpRequest.body;
        details.userDetails.userId = httpRequest.params.id;
        details.guardianDetails.userId = httpRequest.params.id;
        

        // Usecase
        const result = await updateUserUC(details);
        if (result) {
          return {
            headers: {
              "Content-Type": "application/json",
            },
            status: 201,
            body: {result}, //,"Success!"
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
  