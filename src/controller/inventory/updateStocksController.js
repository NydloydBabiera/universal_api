module.exports = function updateStocks({ updateStocksUC }) {
    return async function put(httpRequest) {
      try {
        const itemDetails = httpRequest.body;
        // Usecase
        const result = await updateStocksUC(itemDetails);
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
  