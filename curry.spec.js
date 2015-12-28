const test = require('tape')
const E = require('./curry')

test('words', (assert) => {
  const input = 'Mary had a little lamb'
  const output = ['Mary', 'had', 'a', 'little', 'lamb']

  assert.deepEqual(E.words(input), output)

  assert.end()
})

test('sentences', (assert) => {
  const input = ['Mary had a little lamb', 'His fleece was white as snow']
  const output = [['Mary', 'had', 'a', 'little', 'lamb'], ['His', 'fleece', 'was', 'white', 'as', 'snow']]

  assert.deepEqual(E.sentences(input), output)

  assert.end()
})

test('filterQs', (assert) => {
  const input = ['quixote', 'Quixote', 'chihote', 'Quixotic']
  const output = ['quixote', 'Quixote', 'Quixotic']

  assert.deepEqual(E.filterQs(input), output)

  assert.end()
})

test('max', (assert) => {
  const input = [123, 456, 789, 12]
  const output = 789

  assert.deepEqual(E.max(input), output)

  assert.end()
})

test('slice', (assert) => {
  const input = [1, 2, 3]
  const output = [1, 2]

  const first2 = E.slice(0, 2)
  assert.deepEqual(first2(input), output)

  assert.end()
})

test('take', (assert) => {
  const input = 'Something'
  const output = 'Some'

  const take4 = E.take(4)
  assert.deepEqual(take4(input), output)

  assert.end()
})
