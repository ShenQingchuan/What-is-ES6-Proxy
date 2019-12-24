let obj = {}

let p = new Proxy(obj, {
  defineProperty: (target, property, desc) => {
    console.log(`define property('${property}') for target: ${desc.value}`)
    Reflect.defineProperty(target, property, desc)
    return true
  }
})

p.foo = 'bar'
p['num'] = 999
Object.defineProperty(p, 'baz', {
  value: 123,
  writable: true,
  enumerable: true,
  configurable: true
})
Reflect.defineProperty(p, 'zag', {
  value: false,
  writable: true,
  enumerable: true,
  configurable: false
})

console.log(`p: ${JSON.stringify(p, null, 2)}`)