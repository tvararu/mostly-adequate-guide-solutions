var _ = require('ramda')

exports.wordsBefore = (str) => {
  return _.split(' ', str)
}

exports.wordsAfter = _.split(' ')

exports.sentences = _.map(exports.wordsAfter)
