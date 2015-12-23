var _ = require('ramda')

var words = function (str) {
  return _.split(' ', str)
}

words = _.split(' ')
console.log(words('Mary had a little lamb'))
