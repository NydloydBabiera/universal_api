module.exports = function getAllSubjectUC({ subjectDataAccess }) {
    return async function getSubjects() {
      //add new Subject to DB
      const result = await subjectDataAccess.getAllSubjectSchedule();
  
      return result;
    };
  };
  