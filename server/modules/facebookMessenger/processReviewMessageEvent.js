const db = require('../../util/db');
const serverError = require('../../util/serverError');
const sendMessageToChatUser = require('./sendMessageToChatUser');

async function processReviewMessageEvent({ event }) {
    const query = `
        INSERT INTO simulated_customer_reviews(review, createdAt) 
        VALUES(${ db.escape(event.message.text) }, UTC_TIMESTAMP)
    `;

    try {
        await db.query(query).catch((error) => {
            throw new serverError({
                message: `Error ${ error } running query ${ query } in processReviewMessageEvent`,
                errorCodeName: "PROCESS_REVIEW_MESSAGE_EVENT_FAILED"
            });
        });
    } catch (error) {
        // fail silently so we still send a thank you note to the user 
    }

    await sendMessageToChatUser({ 
        psid: event.sender.id,
        message: `Thanks for your review! Please close the chat session.`
    });
}

module.exports = processReviewMessageEvent;