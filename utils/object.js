/**
 * 对象相关方法
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