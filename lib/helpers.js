const moment = require('moment')

module.exports = {
  addMinutes: function (date, minutes) {
    return new Date(date.getTime() + minutes * 60000)
  },

  getCallerIP: function (request) {
    var ip = (request.headers['x-forwarded-for'] ||
                request.connection.remoteAddress ||
                request.socket.remoteAddress).split(',')[0]

    return ip
  },

  getHashValue: function (inputString) {
    var outputHash = ''

    outputHash = require('crypto').createHash('md5').update(inputString).digest('hex')

    return outputHash
  },

  isJSON: function (item) {
    item = typeof item !== 'string'
      ? JSON.stringify(item)
      : item

    try {
      item = JSON.parse(item)
    } catch (e) {
      return false
    }

    if (typeof item === 'object' && item !== null) {
      return true
    }

    return false
  },

  AddHoursToDate (inputDate, hoursToAdd) {
    return moment(inputDate).add(hoursToAdd, 'hours').toDate()
  },

  AddHoursToUnixTimestamp (inputUnixTimestamp, hoursToAdd) {
    return inputUnixTimestamp + hoursToAdd * 60 * 60
  },

  objectWithoutProperties: function (obj, keys) {
    var target = {}
    for (var i in obj) {
      if (keys.indexOf(i) >= 0) { continue }
      if (!Object.prototype.hasOwnProperty.call(obj, i)) { continue }
      target[i] = obj[i]
    }
    return target
  },

  isValidDate: function (stringDate) {
    let isADate = stringDate &&
                  Object.prototype.toString.call(stringDate) === '[object Date]' &&
                  !isNaN(stringDate)

    if (isADate === false) {
      let momentObj = moment(stringDate)
      isADate = momentObj.isValid()
    }

    return isADate
  },

  groupBy: function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x)
      return rv
    }, {})
  },

  arrayIncludesInObj: function (arr, key, valueToCheck) {
    let found = false

    if (!Array.isArray(arr) ||
    key == null ||
    key.length <= 0) { return false }

    arr.some(value => {
      if (value[key] === valueToCheck) {
        found = true
        return true // this will break the loop once found
      }
    })

    return found
  },

  round: function (value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
  }

}
