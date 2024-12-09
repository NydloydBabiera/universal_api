module.exports = function subjectActions({ pool }) {
  return Object.freeze({
    addNewSubject,
    getAllSubjects,
    getSubject,
    addSubjectSchedule,
    getAllSubjectSchedule,
    addStudentSubjectSchedule,
    checkStudentSubjectSchedule,
    getSubjectSchedPerStudent
  });

  async function addNewSubject(subjectDetails) {
    const { name, description, units } = subjectDetails;

    let sql = `INSERT INTO subject_list(sub_name, description, units) VALUES($1, $2, $3) RETURNING *`;

    let param = [name, description, units];

    try {
      let result = await pool.query(sql, param);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function getAllSubjects() {
    let sql = `SELECT * FROM subject_list`;

    try {
      let result = await pool.query(sql);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function getSubject(subjectDetails) {
    const { name } = subjectDetails;
    let sql = `SELECT * FROM subject_list where sub_name = $1`;

    let param = [name];

    try {
      let result = await pool.query(sql, param);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function addSubjectSchedule(scheduleDetails) {
    const { subject_id, start_time, end_time, day, room } = scheduleDetails;

    let sql = `INSERT INTO subject_schedule(subject_id, start_time, end_time, day_schedule, room_number)
            VALUES($1, $2, $3, $4, $5) RETURNING *`;

    let param = [subject_id, start_time, end_time, day, room];

    try {
      let result = await pool.query(sql, param);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function getAllSubjectSchedule() {
    let sql = `select *,concat(to_char(sched.start_time::time, 'HH12:MI AM'),' - ',to_char(sched.end_time::time, 'HH12:MI AM')) as time_schedule from subject_schedule sched
    inner join subject_list subject on subject.subject_id = sched.subject_id`;
    try {
      let result = await pool.query(sql);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function addStudentSubjectSchedule(studentSubjectDetails) {
    const { student_id, subject_schedule_id } = studentSubjectDetails;

    let sql = `INSERT INTO student_subject_matching(user_id, subject_schedule_id) values($1, $2) RETURNING *`;

    const param = [student_id, subject_schedule_id];
    try {
      let result = await pool.query(sql, param);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
      return error;
    }
  }

  async function checkStudentSubjectSchedule(studentSubjectDetails) {
    const { student_id, subject_schedule_id } = studentSubjectDetails;
    console.log(subject_schedule_id);
    let sql = `SELECT * FROM student_subject_matching where user_id = $1 and subject_schedule_id=$2`;
    const param = [student_id, subject_schedule_id];
    try {
      let result = await pool.query(sql, param);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
      return error;
    }
  }

  async function getSubjectSchedPerStudent(studentId) {
    let sql = `SELECT
    ss.subject_schedule_id,
        sl.sub_name,
        sl.description,
        concat(to_char(ss.start_time::time, 'HH12:MI:SS AM'),' - ',to_char(ss.end_time::time, 'HH12:MI:SS AM')) as time_schedule,
        sl.units,
        ss.day_schedule,
        ss.room_number
        from student_subject_matching
        inner join public.subject_schedule ss on student_subject_matching.subject_schedule_id = ss.subject_schedule_id
        inner join public.subject_list sl on ss.subject_id = sl.subject_id
        where student_subject_matching.user_id = $1`;
    const param = [studentId];
    try {
      let result = await pool.query(sql, param);
      return result;
    } catch (error) {
      console.log("ERROR:", error);
      return error;
    }
  }
};
