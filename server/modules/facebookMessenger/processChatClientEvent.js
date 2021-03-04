const isChatBeginEvent = require('./isChatBeginEvent');
const sendMessageToChatUser = require('./sendMessageToChatUser');
const isReviewMessageEvent = require('./isReviewMessageEvent');
const processReviewMessageEvent = require('./processReviewMessageEvent');

async function processChatClientEvent({ event }) {
    if (isChatBeginEvent({ event })) {
        await sendMessageToChatUser({
            psid: event.sender.id,
            user_ref: event.sender.user_ref,
            message: "Thanks for reaching out! Please leave your review below."
        });
        return;
    } 

    if (isReviewMessageEvent({ event })) {
        await processReviewMessageEvent({ event });
    }
}

module.exports = processChatClientEvent;