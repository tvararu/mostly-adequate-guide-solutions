const R = require('ramda')
const accounting = require('accounting')

exports.isLastInStock = R.compose(R.prop('in_stock'), R.last)

exports.nameOfFirstCar = R.compose(R.prop('name'), R.head)

const _average = xs => R.reduce(R.add, 0, xs) / xs.length

exports.averageDollarValue = R.compose(_average, R.map(R.prop('dollar_value')))

const _underscore = R.replace(/\W+/g, '_')

exports.sanitizeNames = R.map(R.compose(_underscore, R.toLower, R.prop('name')))

exports.availablePrices = R.compose(
  R.join(', '),
  R.map(R.compose(accounting.formatMoney, R.prop('dollar_value'))),
  R.filter(R.prop('in_stock'))
)

const append = R.flip(R.concat)
exports.fastestCar = R.compose(
  append(' is the fastest'),
  R.prop('name'),
  R.last,
  R.sortBy(R.prop('horsepower'))
)
