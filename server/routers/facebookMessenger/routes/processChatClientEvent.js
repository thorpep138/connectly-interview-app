const processChatClientEventHandler = require('../../../modules/facebookMessenger/processChatClientEvent');

async function processChatClientEvent(req, res) {
  const webhookEvents = getFacebookWebhookEvents({ req });
  if (webhookEvents === null) {
    res.sendStatus(404);
    return;
  }

  webhookEvents.forEach(async function(entry) {
    // Gets the message. entry.messaging is an array, but 
    // will only ever contain one message, so we get index 0
    let webhook_event = entry.messaging[0];

    try {
      await processChatClientEventHandler({ event: webhook_event });
    } catch (error) {
      // ignore errors so we process all webhook events  
    }
  });
  
  res.status(200).send('EVENT_RECEIVED');
}

function getFacebookWebhookEvents({ req }) {
  if (typeof req.body === 'object' 
    && req.body.object === 'page' 
    && Array.isArray(req.body.entry)) {
      return req.body.entry;
  }
  return null;
}

module.exports = processChatClientEvent;