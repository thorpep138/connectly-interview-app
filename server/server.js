const path = require('path');
require('dotenv').config({ path: `${ path.resolve(__dirname) }/.env` });
const constants = require('./util/constants');
const express = require('express');
const favicon = require('express-favicon');
const port = constants.port;
const app = express();
const bodyParser = require('body-parser');
const facebookMessengerRouter = require('./routers/facebookMessenger/facebookMessenger');

// trust proxy so that we can get ip addresses from the X-Forwarded-* header in nginx
app.set('trust proxy', true);

// disable etags since dynamic (non-static asset) routes should never cache in our app
app.set('etag', false);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// the __dirname is the current directory from where the script is running
app.use(favicon(path.resolve(__dirname + '/../build/favicon.ico')));
app.use(express.static(path.resolve(__dirname + '/../build')));
app.get('/healthcheck', function (req, res) {
    return res.status(200).json({});
});

app.use('/api/facebookMessenger', facebookMessengerRouter);

app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

app.listen(port);
