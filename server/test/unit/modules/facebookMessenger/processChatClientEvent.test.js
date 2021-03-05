jest.mock('../../../../modules/facebookMessenger/sendMessageToChatUser');
jest.mock('../../../../modules/facebookMessenger/processReviewMessageEvent');
const sendMessageToChatUser = require('../../../../modules/facebookMessenger/sendMessageToChatUser');
const processReviewMessageEvent = require('../../../../modules/facebookMessenger/processReviewMessageEvent');
const processChatClientEvent = require('../../../../modules/facebookMessenger/processChatClientEvent');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('when a valid, processable event has been passed in', () => {
    describe('when a valid chat begin event has been passed in', () => {
        test('it calls sendMessageToChatUser with correct parameters and does not call processReviewMessageEvent', async () => {
            const chatBeginEvent = {
                sender: {
                    id: 'id'
                },
                postback: {
                    referral: {
                        source: 'CUSTOMER_CHAT_PLUGIN',
                        type: 'OPEN_THREAD'
                    }
                }
            };
    
            await processChatClientEvent({ event: chatBeginEvent });
    
            expect(sendMessageToChatUser).toBeCalledWith(expect.objectContaining({
                psid: 'id',
                user_ref: undefined,
                message: 'Thanks for reaching out! Please leave your review below.'
              }));
            
            expect(processReviewMessageEvent).not.toHaveBeenCalled();
        });   
    });

    describe('when a valid review message event has been passed in', () => {
        test('it calls processReviewMessageEvent with correct parameters and does not call processReviewMessageEvent', async () => {
            const reviewMessageEvent = {
                sender: {
                    id: 'id'
                },
                message: {
                    text: "this is a review"
                }
            };
    
            await processChatClientEvent({ event: reviewMessageEvent });
    
            expect(processReviewMessageEvent).toBeCalledWith(expect.objectContaining({
                event: reviewMessageEvent
            }));
            
            expect(sendMessageToChatUser).not.toHaveBeenCalled();
        });   
    });
});