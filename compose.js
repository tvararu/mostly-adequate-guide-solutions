const R = require('ramda')

exports.isLastInStock = R.compose(R.prop('in_stock'), R.last)
