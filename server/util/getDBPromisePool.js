const mysql = require('mysql2');
const mysql2Timeout = require('mysql2-timeout-additions');
const constants = require('./constants');

const getDBPromisePool = ({ connectionLimit, host, user, password, database }) => {
    const pool = mysql.createPool({
        connectionLimit,
        host,
        user,
        password,
        database,
    });

    const promisePool = pool.promise();

    mysql2Timeout.addTimeoutToPromisePool({ 
        pool: promisePool, 
        seconds: constants.maximumQueryExecutionTimeInSeconds 
    });

    return promisePool;
};

module.exports = getDBPromisePool;