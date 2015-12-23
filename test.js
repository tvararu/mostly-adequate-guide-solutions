var test = require('tape')
var modules = require('./index')

console.log(modules)

test('words', (assert) => {
  var testStr = 'Mary had a little lamb'
  var expect = ['Mary', 'had', 'a', 'little', 'lamb']

  assert.deepEqual(modules.wordsBefore(testStr), expect)
  assert.deepEqual(modules.wordsAfter(testStr), expect)

  assert.end()
})
