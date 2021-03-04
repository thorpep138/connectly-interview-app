const getDBPromisePool = require('./getDBPromisePool');
const constants = require('./constants');
const { host, user, password, database } = constants.database;
const promisePool = getDBPromisePool({ 
    connectionLimit: constants.maximumConcurrentDBConnections, 
    host, 
    user, 
    password, 
    database 
});

module.exports = promisePool;