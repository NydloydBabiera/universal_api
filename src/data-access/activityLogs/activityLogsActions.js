module.exports = function activityLogsActions({
    pool
}) {
    return Object.freeze({
        getAllLogs,
        createUserLogs,
        checkLogsExist,
        updateUserLogs,
        getDateToday,
        createUserLogsOut,
        setCurfewSchedule,
        getCurfew
    })

    async function getAllLogs() {
        try {
            let sql = `selectf 
            CONCAT(inf.first_name,' ', inf.last_name) as fullName,
            TO_CHAR(logs.time_in, 'HH:MI:SS') as time_in,
            TO_CHAR(logs.time_out, 'HH:MI:SS') as time_out,
            TO_CHAR(logs.activity_date, 'Month DD, YYYY') as activity_date,
            inf.user_id as user_id
            from activity_logs logs
            inner join user_information inf on inf.user_id = logs.user_id`

            let result = await pool.query(sql);

            return result;
        } catch (error) {
            console.log("ERROR:", error);
        }

    }

    async function getDateToday() {
        try {
            let sql = `SELECT TO_CHAR(NOW(), 'YYYY-MM-DD') as dateToday`

            let result = await pool.query(sql);

            return result.rows;
        } catch (error) {
            console.log("ERROR:", error);
        }

    }

    async function createUserLogs(logDetails) {
        const {
            userId,
            timePunch,
            typeActivity
        } = logDetails;

        let sql = `INSERT INTO activity_logs(user_id, time_in, activity_date, type_activity)
        VALUES ($1, $3, NOW(), $2) RETURNING *`;

        let param = [userId, typeActivity, timePunch];

        try {
            let result = await pool.query(sql, param);

            return result;
        } catch (error) {
            console.log("ERROR", error);
        }
    }

    async function createUserLogsOut(logDetails) {
        const {
            userId,
            timePunch,
            typeActivity
        } = logDetails;

        let sql = `INSERT INTO activity_logs(user_id, time_out, activity_date, type_activity)
        VALUES ($1, $3, NOW(), $2) RETURNING *`;

        let param = [userId, typeActivity, timePunch];

        try {
            let result = await pool.query(sql, param);

            return result;
        } catch (error) {
            console.log("ERROR", error);
        }
    }

    async function checkLogsExist(userId) {

        let sql = `select TO_CHAR(activity_date, 'YYYY-MM-DD') as log_date,  * from activity_logs
        where user_id = $1
        and time_out is null`

        let param = [userId]

        try {

            let result = await pool.query(sql, param);

            return result;

        } catch (error) {
            console.log("ERROR:", error)
        }

    }

    async function updateUserLogs(logDetails) {
        const {
            userId,
            timePunch,
            dateOut
        } = logDetails;
        let sql = `update activity_logs
        set time_out = $2,
        activity_date = $3
        where user_id = $1
        and time_out is null RETURNING *;`

        let param = [userId, timePunch, dateOut]

        try {
            let result = await pool.query(sql, param);

            return result
        } catch (error) {
            console.log("ERROR", error)
        }
    }

    async function setCurfewSchedule(curfewDetails) {
        const { curfewTime, description } = curfewDetails;

        let sql = `UPDATE public.curfew_schedule
        SET curfew_time=$1, description=$2`

        let param = [curfewTime, description]
        try {
            let result = await pool.query(sql, param);

            return result
        } catch (error) {
            console.log("ERROR", error)
        }
    }

    async function getCurfew() {

        let sql = `SELECT * from curfew_schedule`

        try {
            let result = await pool.query(sql);

            return result
        } catch (error) {
            console.log("ERROR", error)
        }
    }



}