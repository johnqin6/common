/**
 * 操作字符串相关方法
 */

/**
 * 横线转驼峰命名
 * @param {String} str 
 */
function camelize(str) {
  let camelizeRE = /_(\w)/g;
  return str.replace(camelizeRE, function(_, c) {
    return c ? c.toUpperCase() : '';
  })
}

/**
 * 驼峰命名转横线命名：拆分字符串，使用-相连，并且转为小写
 * @param {String} str 
 */
function hyphnate(str) {
  let hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, '_$1').toLowerCase()
}

/**
 * 字符串首位大写
 * @param {String} str 
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 生成一个重复的字符串，有n个str组成，可修改为填充为数组等
 * @param {String} str 
 * @param {Number} n 
 */
function repeat(str, n) {
  let res = '';
  while(n) {
    if (n % 2 === 1) {
      res += str;
    }
    if (n > 1) {
      str += str;
    }
    n >>= 1;
  }
  return res;
}
