const isReviewMessageEvent = require('../../../../modules/facebookMessenger/isReviewMessageEvent');

describe('valid events', () => {
    test('valid review event returns true', () => {
        expect(isReviewMessageEvent({ 
            event: {
                sender: {
                    id: "id"
                },
                message: {
                    text: "text"
                }
            }
        })).toBe(true);
    });    
});

describe('invalid events', () => {
    test('review event that is missing sender id returns false', () => {
        expect(isReviewMessageEvent({ 
            event: {
                sender: {
                },
                message: {
                    text: "text"
                }
            }
        })).toBe(false);
    });

    test('review event that is missing message text returns false', () => {
        expect(isReviewMessageEvent({ 
            event: {
                sender: {
                    id: "id"
                },
                message: {
                }
            }
        })).toBe(false);
    });
});