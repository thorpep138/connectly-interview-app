const constants = {
    port: process.env.PORT || 8080,
    verifyToken: process.env.VERIFY_TOKEN,
    facebookPageAccessToken: "EAADvhttiGIEBAKrrZC4I5UaGIcelkB4QXZArffSCpvyiCZCz2X8gxSqgQS49dA4oyZB0AgLZC6D1jvjsVXowlUwZBJOJm04rCS0hQyMR8o03mUBWGRPXa4o3Bsbs4cb2sJHPdywHyNzifyXaUeHPkb1MiXr8FvZA36Rpqt554EEkQZDZD",
    maximumQueryExecutionTimeInSeconds: 5,
    maximumConcurrentDBConnections: 10,
    database: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    }
};

module.exports = constants;