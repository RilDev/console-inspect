import util from 'util';

console.inspect = function() {
  const args = [...arguments].map(arg => util.inspect(arg, {showHidden: false, depth: null, colors: true}))
  console.log.apply(console, args)
}
