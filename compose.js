const R = require('ramda')

exports.isLastInStock = R.compose(R.prop('in_stock'), R.last)

exports.nameOfFirstCar = R.compose(R.prop('name'), R.head)

const _average = xs => R.reduce(R.add, 0, xs) / xs.length

exports.averageDollarValue = R.compose(_average, R.map(R.prop('dollar_value')))
