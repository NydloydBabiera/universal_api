module.exports = function addNewSubjectUC({ subjectDataAccess }) {
    return async function addSubject(scheduleDetails) {
    //   const isSubjectExist = await subjectDataAccess.addSubjectSchedule(scheduleDetails);
  
    //   if (isSubjectExist) {
    //     throw new Error("Subject already exists!");
    //   }
  
      const newSubject = await subjectDataAccess.addSubjectSchedule(scheduleDetails);
  
      const result =  { message: "Schedule added!", newSubject }
      return result;
    };
  };
  