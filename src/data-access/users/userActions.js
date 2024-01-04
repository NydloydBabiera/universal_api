module.exports = function userActions({ pool }) {
  return Object.freeze({
    addNewUser,
    createUserAuthentication,
    loginUser,
    getAllUser,
    createUserLogs,
    updatePassword,
    addUserGuardian,
  });

  async function addNewUser(userDetails) {
    const {
      firstName,
      middleName,
      lastName,
      addressLine1,
      addressLine2,
      cityAddress,
      provincialAddress,
      regionalAddress,
      country,
      gender,
    } = userDetails;

    let sql = `INSERT INTO public.user_information(first_name, middle_name, last_name, address_line1, address_line2, city_address, provincial_address, regional_address, country, gender)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10) RETURNING *`;

    let param = [
      firstName,
      middleName,
      lastName,
      addressLine1,
      addressLine2,
      cityAddress,
      provincialAddress,
      regionalAddress,
      country,
      gender,
    ];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function createUserAuthentication(authenticationDetails) {
    const { userId, userName, passwordUser, roleUser, projecCode } =
      authenticationDetails;

    let sql = `INSERT INTO public.authentication_user(user_id, user_name, password_user, role_user, project_code)
        VALUES ($1, $2, $3, $4, $5);`;

    let param = [userId, userName, passwordUser, roleUser, projecCode];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function loginUser(userAuthentication) {
    const { userName, userPassword } = userCredentials;

    let sql = `select * from user_information where userName = $1 and user_password = $2`;
    let param = [userName, userPassword];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function getAllUser() {
    let sql = `select * from user_information`;

    try {
      let result = await pool.query(sql);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function updatePassword(userDetails) {
    const { userId, newPassword } = userDetails;

    let sql = `update user_information
        set user_password = $1
        where user_id = $2
        returning  *`;

    let param = [newPassword, userId];

    try {
      let result = await pool.query(sql, param);

      return result.rows;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function createUserLogs(logDetails) {
    const { userId, timeIn, typeActivity } = logDetails;

    let sql = `INSERT INTO activity_logs(user_id, time_in, activity_date, type_activity)
    VALUES ($1, CURRENT_TIME, NOW(), $2) RETURNING *`;

    let param = [userId, typeActivity];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  async function addUserGuardian(guardianDetails) {
    const { userId, firstName, middleName, lastName,contactNo } = guardianDetails;

    let sql = `INSERT INTO guardian_information(user_id, first_name, middle_name, last_name, contactNo)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;

    let param = [userId, firstName, middleName, lastName, contactNo];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR", error);
    }
  }
};
