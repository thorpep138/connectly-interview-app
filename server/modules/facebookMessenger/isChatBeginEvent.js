function isChatBeginEvent({ event }) {
    return (typeof event === 'object'
        && typeof event.sender === 'object'
        && (event.sender.id || event.sender.user_ref)
        && typeof event.postback === 'object'
        && typeof event.postback.referral === 'object'
        && event.postback.referral.source === 'CUSTOMER_CHAT_PLUGIN' 
        && event.postback.referral.type === 'OPEN_THREAD')
        || (typeof event === 'object'
            && typeof event.sender === 'object'
            && (event.sender.id || event.sender.user_ref)
            && typeof event.referral === 'object'
            && event.referral.source === 'CUSTOMER_CHAT_PLUGIN'
            && event.referral.type === 'OPEN_THREAD');
}

module.exports = isChatBeginEvent;