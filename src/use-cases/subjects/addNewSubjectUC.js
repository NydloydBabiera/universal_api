module.exports = function addNewSubjectUC({ subjectDataAccess }) {
  return async function addSubject(subjectDetails) {
    const isSubjectExist = await subjectDataAccess.getSubject(subjectDetails);
   
    if (isSubjectExist.rowCount > 0) {
      throw new Error("Subject already exists!");
    }

    const newSubject = await subjectDataAccess.addNewSubject(subjectDetails);
    const result = { message: "Subject added!", newSubject };
    return result;
  };
};
