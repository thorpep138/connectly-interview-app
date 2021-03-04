const fetch = require('node-fetch');
const constants = require('../../util/constants');
const logger = require('../../util/logger');
const serverError = require('../../util/serverError');

async function sendMessageToChatUser({ psid, user_ref, message }) {
    const recipientFieldName = psid ? "id" : "user_ref";
    const recipientFieldValue = psid || user_ref;
    
    return fetch(`https://graph.facebook.com/v10.0/me/messages?`
        + `access_token=${ constants.facebookPageAccessToken }`, {
        method: 'POST',
        body: JSON.stringify({
            messaging_type: "RESPONSE",
            message: {
                text: message
            },
            recipient: {
                [recipientFieldName]: recipientFieldValue,
            }
        }),
        headers: {
            'Content-type': 'application/json'
        }
        }).then(response => response.json())
        .then(json => {
            if (json.error) {
                throw new Error(`Failed to send message to chat user with psid ${ psid }: `
                    + JSON.stringify(json));
            }
        }).catch((error) => {
            throw new serverError({
                message: error,
                errorCodeName: "SEND_MESSAGE_TO_GUEST_CHAT_USER_FAILED"
            });
        });
}

module.exports = sendMessageToChatUser;