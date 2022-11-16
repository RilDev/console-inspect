import './console-inspect.js'

const obj = {
  test: 'test',
  tests: [
    {
      a: 1,
      b: 2,
      c: [
        { a: 1, b: 2, c: 3 }
      ], 
      d: [
        { a: 1, b: 2, c: 3 }
      ]
    }
  ]
}


console.log('---')
console.log('console.log', obj)
console.log('---')
console.inspect('console.inspect', obj)
