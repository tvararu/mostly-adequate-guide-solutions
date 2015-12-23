var test = require('tape')
var modules = require('./index')

test('words', (assert) => {
  var input = 'Mary had a little lamb'
  var output = ['Mary', 'had', 'a', 'little', 'lamb']

  assert.deepEqual(modules.wordsBefore(input), output)
  assert.deepEqual(modules.wordsAfter(input), output)

  assert.end()
})

test('sentences', (assert) => {
  var input = ['Mary had a little lamb', 'His fleece was white as snow']
  var output = [['Mary', 'had', 'a', 'little', 'lamb'], ['His', 'fleece', 'was', 'white', 'as', 'snow']]

  assert.deepEqual(modules.sentences(input), output)

  assert.end()
})
