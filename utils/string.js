/**
 * 操作字符串相关方法
 * ES5内置方法
 * - charAt()  返回在指定位置的字符
 *   + 'hello'.charAt(2)  --> '1'
 * - charCodeAt()  返回在指定位置的字符的unicode编码
 *   + 'hello'.charCodeAt(2)  --> 108
 * - concat()   连接两个或更多字符串，并返回新的字符串
 *   + 'hello'.concat(' world')  --> 'hello world'
 * - fromCharCode()  将unicode编码转为字符
 *   + String.fromCharCode(65)   --> 'A'
 * - indexOf()   返回某个指定的字符串值在字符串中首次出现的位置
 *   + 'hello'.indexOf('e')   --> 1
 * - lastIndexOf()  返回某个指定的字符串值在字符串中在尾部开始搜索首次出现的位置
 *   + 'hello'.lastInsexOf('l')  --> 1
 * - repeat()  复制字符串指定次数，并将他们连接起来
 *   + 'hello'.repeat(2)    --> 'hellohello'  
 * - match()  查找一个或多个正则表达式的匹配
 *   + 'hello'.match(/he/g)  --> true 
 * - search()  查找与正则表达式相匹配的值, 有则返回匹配的字符串的起始位置，没有返回-1
 *   + 'hello'.search('he')   --> 0 
 * - replace()  在字符串中查找匹配的子串，并替换与正则表达式匹配的子串
 *   + 'hello'.replace(/he/, 'w')  --> 'wllo'
 * - slice(开始位置，结束位置)    提取字符串的片断，并在新的字符串中返回被提取的部分
 *   + 'hello'.slice(2,4)  --> 'll'
 *   + 'hello'.slice(2, -1)  --> 'll'
 *   + 'hello'.slice(2)  --> 'llo'
 * - substr(开始位置,长度)    从起始索引号提取字符串中指定数组的字符
 *   + 'hello'.substr(2, 3)  --> 'llo'
 * - substring(from, to)   提取字符串中两个指定的索引号之间的字符。参数：正整数值
 *   + 'hello'.substring(2, 4)  --> 'll'
 *   + 'hello'.substring(5, 2)  --> 'llo'
 * - toLowerCase()  把字符串转换为小写
 * - toLocaleLowerCase()   根据本地主机的语言环境把字符串转换为小写
 *   + 'HelLo'.toLowerCase()   -->  'hello'
 * - toUpperCase()   把字符串转换为大写
 * - toLocaleUpperCase()   根据本地主机的语言环境把字符串转换为大写
 *   + 'HelLo'.toUpperCase()   -->  'HELLO'
 * - toString() 返回一个字符串
 * - valueOf()   返回某个字符串对象的原始值
 * - trim()  去除字符串两边的空白
 *   + ' word '.trim()    -->  'word'
 * - split()  把字符串分割为字符串数组
 *   + 'hello world !!'.split(' ')  --> ['hello', 'world', '!!']
 * ES6 新增方法
 * - fromCodePoint()  
 *   + 可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足(不能识别大于0xFFFF的码点)
 *   + String.fromCodePoint(0x20BB7)  -->  "𠮷"
 * - trimStart()  去除字符串左边的空白
 * - trimEnd()  去除字符串右边的空白
 * - padStart()和padEnd() 补全头部和尾部字符串
 *   + 'he'.padStart(5, 'ab')  --> 'abahe'
 *   + 'he'.padEnd(5, 'ab')    --> 'heaba'
 * - startsWith()   查看字符串是否以指定的字符串开头
 *   + 'hello'.startsWith('he')  --> true
 * - endsWith  查看字符串是否以指定的字符串结尾
 *   + 'hello'.endsWith('o')  --> true
 * - includes()   查找字符串中是否包含指定的字符串
 *   + 'hello'.includes('o')   --> true
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