const express = require('express');
const router = express.Router();
const processChatClientEvent = require('./routes/processChatClientEvent');
const verifyWebhook = require('./routes/verifyWebhook');

router.post('/webhook', processChatClientEvent);
router.get('/webhook', verifyWebhook);

module.exports = router;