module.exports = function addUser({ getAllSubjectUC }) {
    return async function get() {
      try {

        // Usecase
        const result = await getAllSubjectUC();
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
  