const R = require('ramda')

exports.isLastInStock = R.compose(R.prop('in_stock'), R.last)

exports.nameOfFirstCar = R.compose(R.prop('name'), R.head)

const _average = xs => R.reduce(R.add, 0, xs) / xs.length

exports.averageDollarValue = R.compose(_average, R.map(R.prop('dollar_value')))

// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ["ferrari_ff"].
const _underscore = R.replace(/\W+/g, '_')

exports.sanitizeNames = R.map(R.compose(_underscore, R.toLower, R.prop('name')))
