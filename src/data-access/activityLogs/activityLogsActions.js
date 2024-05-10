module.exports = function activityLogsActions({
    pool
}) {
    return Object.freeze({
        getAllLogs,
        createUserLogs,
        checkLogsExist,
        updateUserLogs
    })

    async function getAllLogs() {
        try {
            let sql = `select 
            CONCAT(inf.first_name,' ', inf.last_name) as fullName,
            TO_CHAR(logs.time_in, 'HH:MI:SS') as time_in,
            TO_CHAR(logs.time_out, 'HH:MI:SS') as time_out,
            TO_CHAR(logs.activity_date, 'Month DD, YYYY') as activity_date
            from activity_logs logs
            inner join user_information inf on inf.user_id = logs.user_id`

            let result = await pool.query(sql);

            return result;
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

    async function checkLogsExist(userId) {

        let sql = `select * from activity_logs
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
            timePunch
        } = logDetails;
        let sql = `update activity_logs
        set time_out = $2
        where user_id = $1
        and time_out is null RETURNING *;`

        let param = [userId, timePunch]

        try {
            let result = await pool.query(sql, param);

            return result
        } catch (error) {
            console.log("ERROR", error)
        }
    }

}