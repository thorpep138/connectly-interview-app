function isChatBeginEvent({ event }) {
    return (typeof event === 'object'
        && typeof event.postback === 'object'
        && typeof event.postback.referral === 'object'
        && event.postback.referral.source === 'CUSTOMER_CHAT_PLUGIN' 
        && event.postback.referral.type === 'OPEN_THREAD')
        || (typeof event === 'object'
            && typeof event.referral === 'object'
            && event.referral.source === 'CUSTOMER_CHAT_PLUGIN'
            && event.referral.type === 'OPEN_THREAD');
}

module.exports = isChatBeginEvent;