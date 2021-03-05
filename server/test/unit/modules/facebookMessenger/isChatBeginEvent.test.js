const isChatBeginEvent = require('../../../../modules/facebookMessenger/isChatBeginEvent');

describe('valid events', () => {
    describe('valid events with sender id as opposed to sender user_ref', () => {
        test('valid chat event in postback format returns true', () => {
            expect(isChatBeginEvent({ 
                event: {
                    sender: {
                        id: 'id'
                    },
                    postback: {
                        referral: {
                            source: 'CUSTOMER_CHAT_PLUGIN',
                            type: 'OPEN_THREAD'
                        }
                    }
                }
            })).toBe(true);
        });
    
        test('valid chat event in referral format returns true', () => {
            expect(isChatBeginEvent({ 
                event: {
                    sender: {
                        id: 'id'
                    },
                    referral: {
                        source: 'CUSTOMER_CHAT_PLUGIN',
                        type: 'OPEN_THREAD'
                    }
                }
            })).toBe(true);
        });
    });

    describe('valid events with sender user_ref as opposed to sender id', () => {
        test('valid chat event in postback format returns true', () => {
            expect(isChatBeginEvent({ 
                event: {
                    sender: {
                        user_ref: 'user_ref'
                    },
                    postback: {
                        referral: {
                            source: 'CUSTOMER_CHAT_PLUGIN',
                            type: 'OPEN_THREAD'
                        }
                    }
                }
            })).toBe(true);
        });
    
        test('valid chat event in referral format returns true', () => {
            expect(isChatBeginEvent({ 
                event: {
                    sender: {
                        user_ref: 'user_ref'
                    },
                    referral: {
                        source: 'CUSTOMER_CHAT_PLUGIN',
                        type: 'OPEN_THREAD'
                    }
                }
            })).toBe(true);
        });
    });
});

describe('invalid events', () => {
    test('chat event in postback format with incorrect source returns false', () => {
        expect(isChatBeginEvent({ 
            event: {
                sender: {
                    id: 'id'
                },
                postback: {
                    referral: {
                        source: 'garbage',
                        type: 'OPEN_THREAD'
                    }
                }
            }
        })).toBe(false);
    });

    test('chat event in postback format with incorrect type returns false', () => {
        expect(isChatBeginEvent({ 
            event: {
                sender: {
                    id: 'id'
                },
                postback: {
                    referral: {
                        source: 'CUSTOMER_CHAT_PLUGIN',
                        type: 'garbage'
                    }
                }
            }
        })).toBe(false);
    });

    test('chat event in referral format with incorrect source return false', () => {
        expect(isChatBeginEvent({ 
            event: {
                sender: {
                    id: 'id'
                },
                referral: {
                    source: 'garbage',
                    type: 'OPEN_THREAD'
                }
            }
        })).toBe(false);
    });

    test('chat event in referral format with incorrect type return false', () => {
        expect(isChatBeginEvent({ 
            event: {
                referral: {
                    source: 'CUSTOMER_CHAT_PLUGIN',
                    type: 'garbage'
                }
            }
        })).toBe(false);
    });
});