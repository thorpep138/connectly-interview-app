const logger = require('./logger');

function serverError({ 
    message, 
    errorCodeName,
    doNotLog }) {
    
    this.name = 'ServerError';
    this.errorCodeName = errorCodeName;
    this.message = `Error: ${ message }, `
        + `error code: ${ this.errorCodeName }`;
    this.stack = (new Error()).stack;

    if (!doNotLog) {
        logger.error(this.message);
    }
};

serverError.prototype.toString = function() {
    return `${ this.name }:${ this.message }`;
}

module.exports = serverError;