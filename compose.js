const R = require('ramda')

// use _.compose() to rewrite the function below. Hint: _.prop() is curried.
exports.isLastInStock = R.compose(R.prop('in_stock'), R.last)
