function isReviewMessageEvent({ event }) {
    return typeof event === 'object'
        && typeof event.sender === 'object'
        && typeof event.sender.id === 'string'
        && typeof event.message === 'object'
        && typeof event.message.text === 'string';
}

module.exports = isReviewMessageEvent;