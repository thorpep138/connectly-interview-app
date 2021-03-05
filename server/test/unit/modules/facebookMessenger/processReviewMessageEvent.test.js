jest.mock('../../../../modules/facebookMessenger/sendMessageToChatUser');
jest.mock('../../../../util/db', () => {
    return { 
        query: jest.fn(),
        escape: (text) => "'" + text + "'"
    }
});
const db = require('../../../../util/db');
const sendMessageToChatUser = require('../../../../modules/facebookMessenger/sendMessageToChatUser');
const processReviewMessageEvent = require('../../../../modules/facebookMessenger/processReviewMessageEvent');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('when a valid review message event has been passed in', () => {
    test('it calls db with correct query and calls sendMessageToChatUser with correct params', async () => {
        const dbSpy = jest.spyOn(db, 'query');

        const reviewMessageEvent = {
            sender: {
                id: "id"
            },
            message: {
                text: "text"
            }
        };

        await processReviewMessageEvent({ event: reviewMessageEvent });

        expect(dbSpy).toBeCalledWith(`INSERT INTO simulated_customer_reviews(review, createdAt) VALUES('text', UTC_TIMESTAMP)`);
        
        expect(sendMessageToChatUser).toBeCalledWith(expect.objectContaining({
            psid: 'id',
            message: `Thanks for your review! Please close the chat session.`
        }));
    });   
});