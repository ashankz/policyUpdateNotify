const winston = require('winston')
const { createLogger, format, transports } = require('winston')
const util = require('util')
const splunkString = 'STATUSAPPAPI' + process.env.NODE_ENV

// add the name of environment to log. This will help in filtering
// logs in Splunk/Kibana
const addEnvironmentName = format((info, opts) => {
  if (process.env.NODE_ENV !== 'LOCAL') { info.appEnv = splunkString }

  return info
})

var customFormat = winston.format.combine(
  addEnvironmentName(),
  winston.format.json()
)

// for local development add some color to console output
if (process.env.NODE_ENV === 'LOCAL') {
  customFormat = winston.format.combine(
    winston.format.colorize(),
    addEnvironmentName(),
    winston.format.simple()
  )
}

// instantiate a new Winston Logger
const logger = createLogger({
  level: 'debug',
  transports: [
    new transports.Console({
      format: customFormat
    })
  ],
  exitOnError: false
})

// for local development set the default level to debug
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'LOCAL') {
  logger.level = 'debug'
}

/*
Rest of the code is to make the logger mimic
console.log multiple parameters
from: https://stackoverflow.com/a/15547123
*/

// pass in function arguments object and returns string with whitespaces
function argumentsToString (v) {
  // convert arguments object to real array
  var args = Array.prototype.slice.call(v)
  for (var k in args) {
    if (typeof args[k] === 'object') {
      // args[k] = JSON.stringify(args[k]);
      /* For Axios errors */
      if (args[k] == null) {
        args[k] = null
      } else if (args[k].response) {
        /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
                */
        args[k] = { data: args[k].response.data, message: args[k].message }
      } else if (args[k].request) {
        /*
                * The request was made but no response was received, `error.request`
                * is an instance of XMLHttpRequest in the browser and an instance
                * of http.ClientRequest in Node.js
                */
        args[k] = { data: args[k].request, message: args[k].message }
      }
      args[k] = util.inspect(args[k], false, null, true)
    }
  }
  var str = args.join(' ')
  return str
}

// wrapping the winston function to allow for multiple arguments
var wrap = {}
wrap.info = function () {
  logger.log.apply(logger, ['info', argumentsToString(arguments)])
}

wrap.error = function () {
  logger.log.apply(logger, ['error', argumentsToString(arguments)])
}

wrap.warn = function () {
  logger.log.apply(logger, ['warn', argumentsToString(arguments)])
}

wrap.debug = function () {
  logger.log.apply(logger, ['debug', argumentsToString(arguments)])
}

wrap.setLogLevel = function (level) {
  if (level === 'debug' ||
        level === 'info' ||
        level === 'warn' ||
        level === 'warning' ||
        level === 'error'
  ) {
    logger.level = level === 'warning' ? 'warn' : level
  }
}

module.exports = wrap
