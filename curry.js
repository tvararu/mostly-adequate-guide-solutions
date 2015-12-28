const R = require('ramda')

exports.words = R.split(' ')

exports.sentences = R.map(exports.words)

const match = R.curry((what, x) => x.match(what))

exports.filterQs = R.filter(match(/q/i))

exports.max = R.reduce(Math.max, -Infinity)

exports.slice = R.curry((start, len, xs) => xs.slice(start, len))

exports.take = exports.slice(0)
