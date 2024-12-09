module.exports = function getStudentSubject({ subjectDataAccess }) {
  return async function getStudentSubjectSchedule(studentId) {
    //add new Subject to DB
    const result = await subjectDataAccess.getSubjectSchedPerStudent(studentId);

    return result;
  };
};
