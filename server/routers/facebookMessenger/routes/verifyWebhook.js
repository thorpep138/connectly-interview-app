const logger = require('../../../util/logger');
const constants = require('../../../util/constants');

// TODO: do input validation on the req object here and move the rest
// of the work to verifyWebhook in the modules folder 

function verifyWebhook(req, res) {
    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = constants.verifyToken;
        
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
        
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Responds with the challenge token from the request
        logger.info('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
        
        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);      
        }
    }
}

module.exports = verifyWebhook;