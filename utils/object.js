/**
 * 对象相关方法 
 * - Object.assign() 用于克隆合并对象
 *   Object.assign({}, {name: 'john'})  --> {name: 'john'}
 *   Object.assign({age: 18}, {name: 'john'})  --> {age: 18, name: 'john'}
 * - Object.is()  用于判断两个值是否相同
 *   Object.is('a', 'b')  --> false
 * - Object.keys()  用于返回对象可枚举的属性和方法的名称 
 *   Object.keys({name: 'john', age: 18})  --> ['name', 'age']
 * - Object.defineProperty()
 *   + 劫持变量的set和get方法,将属性添加到对象，或修改现有属性的特性
 *   var a = {};
 *   Object.defineProperty(a, 'name', {
 *     value : 'kong',
 *     enumerable : true	//该属性是否可枚举
 *   })
 * - Object.defineProperties()
 *   + 可添加多个属性,与Object.defineProperty()对应
 * - isPrototypeOf  
 *   + 确定一个对象是否存在于另一个对象的原型链中
 *   function a(){}
 *   var b = new a();
 *   console.log(a.prototype.isPrototypeOf(b));//true
 */

/**
 * 将属性混合到目标对象中
 * @param {Object} to 
 * @param {Object} _from 
 */
function extend(to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to;
}
// console.log({age: 21}, {name: 'john'}) // =>  { age: 21, name: 'john'}

// Object.assign: 对象属性复制，浅拷贝
Object.assign = Object.assign || function() {
  if (arguments.length == 0) throw new TypeError('cannot convert undefined or null to object');
  let target = arguments[0],
      args = Array.prototype.slice.call(arguents, 1),
      key
  args.forEach(function (item) {
    for (key in item) {
      item.hasOwnProperty(key) && (target[key] = item[key])
    }
  })
}
// 使用Object.assign可以浅克隆一个对象
let clone = Object.assign({}, {name: 'john'}); // => {name: 'john'}
// 简单的深克隆可以使用JSON.parse和JSON.stringify(), 这两个api是解析json数据的，
// 所以只能解析除symbol以外的原始类型及数组和对象
let clone = JSON.parse(JSON.stringify({ name: 'jogn', obj: { key: 'val' }}))

// clone: 克隆数据，可深度克隆
// 这里列出了原始类型，时间、正则、错误、数组、对象的克隆规则，其他的可自行补充  
function clone(val, deep) {
  if (isPrimitive(val)) {
    return val;
  }
  if (isArrayLike(val)){  // 类数组
    val = Array.prototype.slice.call(val)
    return val.map(item => deep ? clone(item, deep) : item)
  } else if (isPlainObject(val)) { // 对象
    let target = {},
        key;
    for (key in val) {
      val.hasOwnProperty(key) && (target[key] = deep ? clone(val[key], deep) : val[key])
    }
  }

  let type = getRawType(val)
  switch(type) {
    case 'Date':
    case 'RegExp':
    case 'Error': val = new window[type](val); break;
  }
  return val
}

/**
 * 深克隆 使用es6的Array.from实现
 * @param {*} val 
 */
function recursiveClone(val) {
  return Array.isArray(val) ? Array.from(val, recursiveClone) : val;
}
