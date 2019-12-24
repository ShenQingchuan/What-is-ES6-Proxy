let obj = {
  foo: 'bar',
  'baz': 123
}

let p = new Proxy(obj, {
  has: (target, property) => {
    console.log(`Check: '${property}' in target`)
    return property in target
  }
})

const propFoo = 'foo'
console.log(propFoo in p) 
// Check: 'foo' in target
// true

console.log('baz' in p)
// Check: 'baz' in target
// true

console.log('zeg' in p)
// Check 'zeg' in target
// false

