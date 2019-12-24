let sum = (...args) => {
  return args.reduce((a, b) => a + b)
}

let p = new Proxy(sum, {
  apply: (target, thisArg, args) => {
    console.log('it will be: ' + target.name + '(' + args.join(',') + ') * 10')
    return target(...args)
  }
})

// 以下输出皆为：
// it will be: sum(1,2,4,6) * 10
// 13
console.log(p(1,2,4,6))
console.log(p.apply(null, [1,2,4,6]))
console.log(p.call(null, 1,2,4,6))
console.log(Reflect.apply(p, null, [1,2,4,6]))