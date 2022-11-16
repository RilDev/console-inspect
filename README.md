# Console.Inspect

When logging deep nested objects in the Node console, it might get folded.

For example, using this deep nested object:

```
{
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
  
```

The `console.log` output will be:

```
{ test: 'test', tests: [ { a: 1, b: 2, c : [Array], d: [Array] } ] }
```

Enters `console.inspect` that will output the entire object:

```
{
  test: 'test',
  tests: [
    {
      a: 1,
      b: 2,
      c: [ { a: 1, b: 2, c: 3 } ],
      d: [ { a: 1, b: 2, c: 3 } ]
    }
  ]
}
```

## Usage

Copy the `console-inspect.js` into your project.

Import `console-inspect.js` at the root of your project.

```
import "console-inspect.js";

const myBigObject = {...};

console.inspect(myBigObject);
console.inspect("test", "test2", myBigObject);
```

## Demo

Run `node demo.js` will display logs in the console.

## Documentation

StackOverflow answer: https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object/10729284#10729284

Official documentation: https://nodejs.org/api/util.html#util_util_inspect_object_options
