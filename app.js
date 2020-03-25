var express = require('express');
var util = require('util')

var bodyParser = require('body-parser')
var app = express();
app.use(express.static('public'))

const logger = require('./lib/logger')


if (process.env.NODE_ENV === 'LOCAL') {
    const port = 3000
    app.listen(port, () => console.log(`API listening on port ${port}!`))
    logger.debug('Started the app')
  }

module.exports = app

