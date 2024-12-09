module.exports = function getStudentSubjectSchedule({ getStudentSubjectScheduleUC }) {
    return async function get(httpRequest) {
      try {
        const studentId = httpRequest.params.id
        // Usecase
        const result = await getStudentSubjectScheduleUC(studentId);
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
  