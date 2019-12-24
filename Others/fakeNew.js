/**
 * 本代码旨在实现 JavaScript 的 new 操作符功能
 */

function New(constructorFunc, args) {
  var obj = {}; //创建 一个新对象
  Constructor = [].shift.call(arguments); //shift方法去除数组第一个元素，并返回
  obj.__proto__ = Constructor.prototype;//实例的隐式原型指向构造函数原型，
  const ret = Constructor.apply(obj, arguments);
  //使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  return typeof ret === 'object' ? ret : obj; //return 这边可以进行判断
}

function Person(name, sex) {
  this.name = name
  this.sex = sex
}
Person.prototype.say = function() {
  console.log(`Hello, I am ${this.name}`)
}
const tomy = New(Person, 'Tomy', 'M')

console.log(tomy)               // Person { name: 'Tomy', sex: 'M' }

console.log(tomy.constructor)   // [Function: Person]

console.log(tomy.__proto__)     // Person { say: [Function] }
console.log(tomy.__proto__ === Person.prototype)  // true

const child_tomy = Object.create(tomy)
console.log(child_tomy.__proto__ === tomy)

tomy.say()  // Hello, I am Tomy
module.exports = New
