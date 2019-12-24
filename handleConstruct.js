function Person(name, sex) {
  this.name = name
  this.sex = sex
}

let p = new Proxy(Person, {
  construct: (target, args) => {
    console.log(`new ${target.name}(${args.join(', ')})`)
    return new target(...args)
  }
})

let tom = new p('tom', 'M')