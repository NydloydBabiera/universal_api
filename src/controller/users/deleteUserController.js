module.exports = function deleteUser({ deleteUserUC }) {
  return async function post(httpRequest) {
    try {
      const userDetails = httpRequest.body;
      userDetails.userId = httpRequest.params.id;
      // Usecase
      const result = await deleteUserUC(userDetails);
      if (result) {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          status: 201,
          body: result.rows, //,"Success!"
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
