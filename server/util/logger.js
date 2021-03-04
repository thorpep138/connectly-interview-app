const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;

require('winston-daily-rotate-file');

var exceptionHandlers = [
	new (transports.DailyRotateFile)({
		name: 'Error Logs',
        filename: 'connectly-interview-app-uncaught-exceptions-%DATE%.log',
        dirname: 'logs',
		datePattern: 'YYYY-MM-DD',
		zippedArchive: true,
		maxSize: '250m',
		maxFiles: '14d'
	})
];

const infoErrorCombinedLogRotationTransport = new (transports.DailyRotateFile)({
    filename: 'connectly-interview-app-info-error-combined-%DATE%.log',
    level: 'info',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    dirname: 'logs',
    maxSize: '500m',
    maxFiles: '14d'
});

const errorLogRotationTransport = new (transports.DailyRotateFile)({
    filename: 'connectly-interview-app-error-%DATE%.log',
    level: 'error',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    dirname: 'logs',
    maxSize: '250m',
    maxFiles: '14d'
});

let logger;

if (process.env.LOG_TO_CONSOLE) {
    logger = createLogger({
        format: combine(
            timestamp(),
            prettyPrint()
        ),
        transports: [
            new transports.Console({
                format: format.simple()
              })
        ]
    });
} else {
    logger = createLogger({
        format: combine(
            timestamp(),
            prettyPrint()
        ),
        transports: [
            infoErrorCombinedLogRotationTransport,
            errorLogRotationTransport
        ],
        exceptionHandlers: exceptionHandlers
    });
}


logger.emitErrs = false; // suppress any winston errors

module.exports = logger;