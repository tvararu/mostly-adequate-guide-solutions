var test = require('tape')
var E = require('./curry')

test('words', (assert) => {
  var input = 'Mary had a little lamb'
  var output = ['Mary', 'had', 'a', 'little', 'lamb']

  assert.deepEqual(E.words(input), output)

  assert.end()
})

test('sentences', (assert) => {
  var input = ['Mary had a little lamb', 'His fleece was white as snow']
  var output = [['Mary', 'had', 'a', 'little', 'lamb'], ['His', 'fleece', 'was', 'white', 'as', 'snow']]

  assert.deepEqual(E.sentences(input), output)

  assert.end()
})

test('filterQs', (assert) => {
  var input = ['quixote', 'Quixote', 'chihote', 'Quixotic']
  var output = ['quixote', 'Quixote', 'Quixotic']

  assert.deepEqual(E.filterQs(input), output)

  assert.end()
})

test('max', (assert) => {
  var input = [123, 456, 789, 12]
  var output = 789

  assert.deepEqual(E.max(input), output)

  assert.end()
})

test('slice', (assert) => {
  var input = [1, 2, 3]
  var output = [1, 2]

  var first2 = E.slice(0, 2)
  assert.deepEqual(first2(input), output)

  assert.end()
})

test('take', (assert) => {
  var input = 'Something'
  var output = 'Some'

  var take4 = E.take(4)
  assert.deepEqual(take4(input), output)

  assert.end()
})
