class Ele {
  constructor(x) {
    this.x = x
  }
}

const e = new Ele(4)
let p = new Proxy(e, {
  get: (target, property) => {
    return `using get() ${target[property]}`
  }
})

// 以下结果皆为：
// using get() 4
console.log(p.x)
console.log(p['x'])
console.log(Object.create(p).x)
console.log(Object.create(p)['x'])
console.log(Reflect.get(p, 'x'))
