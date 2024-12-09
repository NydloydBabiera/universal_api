module.exports = function addStudentSchedule({ subjectDataAccess }) {
  return async function addSubject(studentSubjectDetails) {
    const { subject_schedule_id } = studentSubjectDetails;

    console.log(studentSubjectDetails);

    for await (const schedule of subject_schedule_id) {
      studentSubjectDetails.subject_schedule_id = schedule;
      const isScheduleExist =
        await subjectDataAccess.checkStudentSubjectSchedule(
          studentSubjectDetails
        );

      if (isScheduleExist.rowCount > 0) {
        console.log("subject already exist");
        continue;
      }
      await subjectDataAccess.addStudentSubjectSchedule(studentSubjectDetails);
    }

    const result = { message: "Subject Schedule added!" };
    return result;
  };
};
