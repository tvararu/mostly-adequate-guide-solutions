var _ = require('ramda')

exports.wordsBefore = (str) => {
  return _.split(' ', str)
}

exports.wordsAfter = _.split(' ')
