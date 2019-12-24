let obj = {
  foo: 'bar',
  baz: 123,
  'zag': false,
  remain: 'End'
}

let p = new Proxy(obj, {
  deleteProperty: (target, property) => {
    console.log(`delete target.${property}`)
    Reflect.deleteProperty(target, property)
    return true
  }
})

delete p.foo
delete p['baz']
Reflect.deleteProperty(p, 'zag')

console.log(`p: ${JSON.stringify(p, null, 2)}`)