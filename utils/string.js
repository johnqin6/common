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

/*
 * 检测密码强度
*/
function checkPwd (str) {
  var Lv = 0;
  if (str.length < 6) {
      return Lv
  }
  if (/[0-9]/.test(str)) {
      Lv++
  }
  if (/[a-z]/.test(str)) {
      Lv++
  }
  if (/[A-Z]/.test(str)) {
      Lv++
  }
  if (/[\.|-|_]/.test(str)) {
      Lv++
  }
  return Lv;
}

/*过滤html代码(把<>转换)*/
function filterTag (str) {
  str = str.replace(/&/ig, "&amp;");
  str = str.replace(/</ig, "&lt;");
  str = str.replace(/>/ig, "&gt;");
  str = str.replace(" ", "&nbsp;");
  return str;
}