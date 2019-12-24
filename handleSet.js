"use strict";
let p = new Proxy({}, {
  set: (target, key, value) => {
    console.log(`using set('${key}', ${
      typeof value === 'string' 
        ? "'" + value + "'" 
        : value})`
    )
    if (key === 'n') {
      if (!Number.isInteger(value)) {
        throw new TypeError("property 'n' must be a integer!")
      } else if (value > 200) {
        throw new RangeError('n is too large')
      }
    }
    target[key] = value
    return true // 表示成功
  }
});

p.foo = 1;
p['hello'] = 'world'
p.bar = undefined;

try {
  p.n = 'abc'
} catch (error) {
  console.log(error.message)
}

try {
  p.n = 202
} catch (error) {
  console.log(error.message)
}

const child_p = Object.create(p)
child_p.n = 116

Reflect.set(p, 'foo', 'baz')
Reflect.set(child_p, 'child_foo', 'child_baz')
