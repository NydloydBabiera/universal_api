module.exports = function addStudentSubject({ addStudentSubjectScheduleUC }) {
    return async function post(httpRequest) {
      try {
        const studentSubjectDetails = httpRequest.body;

        // Usecase
        const result = await addStudentSubjectScheduleUC(studentSubjectDetails);
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
  