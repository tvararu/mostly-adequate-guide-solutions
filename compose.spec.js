const test = require('tape')
const E = require('./compose')

const CARS = [
  {name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true},
  {name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false},
  {name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false},
  {name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false},
  {name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true},
  {name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false}
]

test('isLastInStock', (assert) => {
  var input = CARS
  var output = false

  assert.deepEqual(E.isLastInStock(input), output)

  assert.end()
})

test('nameOfFirstCar', (assert) => {
  var input = CARS
  var output = 'Ferrari FF'

  assert.deepEqual(E.nameOfFirstCar(input), output)

  assert.end()
})

test('averageDollarValue', (assert) => {
  var input = CARS
  var output = 790700

  assert.deepEqual(E.averageDollarValue(input), output)

  assert.end()
})
