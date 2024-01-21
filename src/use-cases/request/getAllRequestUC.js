module.exports = function getAllRequestUC({ requestDataAccess }) {
  return async function getAllRequest() {
    //validation if complete details entities
    const request = await requestDataAccess.getAllRequest();
    return { data: request.rows };
  };
};
