module.exports = function userActions({ pool }) {
  return Object.freeze({
    addNewUser,
    createUserAuthentication,
    loginUser,
    getAllUser,
    createUserLogs,
    updatePassword,
    addUserGuardian,
    updateUserDetails,
    updateGuardianDetails,
    deleteGuardian,
    deleteUser
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
    const { userId, userName, passwordUser, roleUser, projectCode } =
      authenticationDetails;

    let sql = `INSERT INTO public.authentication_user(user_id, user_name, password_user, role_user, project_code)
        VALUES ($1, $2, $3, $4, $5);`;

    let param = [userId, userName, passwordUser, roleUser, projectCode];

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
    let sql = `select CONCAT(first_name,' ',middle_name,' ',last_name) as full_name,
    *
    from user_information`;

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
    const { userId, firstName, middleName, lastName, contactNo } =
      guardianDetails;

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

  async function updateUserDetails(userDetails) {
    console.log("UPDATE USER");
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
      userId,
    } = userDetails;

    let sql = `update user_information
              set first_name=$1, middle_name=$2, 
              last_name=$3, address_line1=$4, 
              address_line2=$5, city_address=$6, 
              provincial_address=$7, regional_address=$8, 
              country=$9, gender=$10
              where user_id = $11 RETURNING * `;

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
      userId,
    ];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function updateGuardianDetails(guardianDetails) {
    console.log("UPDATE GUARDIAN");
    const { userId, firstName, middleName, lastName, contactNo, guardianId } =
      guardianDetails;

    let sql = `UPDATE guardian_information
    SET first_name=$2, middle_name=$3, 
    last_name=$4, contactno=$5
    WHERE user_id = $1 RETURNING *`;

    let param = [userId, firstName, middleName, lastName, contactNo];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  async function deleteUser(userId) {
    let sql = `delete from user_information WHERE user_id = $1`;
    let param = [userId];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function deleteGuardian(userId){
    let sql = `delete from guardian_information WHERE user_id = $1`;
    let param = [userId];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }
};
