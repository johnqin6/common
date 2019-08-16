// 检测相关函数

/**
 * isStatic: 检测数据是不是除了symbol外的原始数据
 * @param {*} value 
 */
function isStatic(value) {
  return(
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'undefined' ||
    value === null
  )
}

/**
 * 检测数据是不是原始数据
 * @param {} val 
 */
function isPrimitive(val) {
  return isStatic(val) || typeof value === 'symbol'
}

/**
 * 判断数据是不是引用类型的数据 (例如： arrays, functions, objects, regexes, new Number(0),以及 new String(''))
 * @param {*} val 
 */
function isObject(val) {
  let type = typeof val
  return val != null && (type == 'object' || type == 'function')
}

/**
 * 检查val是否是 类对象。如果一个值是类对象，那么他不应该是null, 而且typeof后的结果是'object'
 * @param {*} val 
 */
function isObjectLike(val) {
  return val != null && typeof val == 'object'
}

/**
 * 获取数据类型，返回结果为 Number, String, Object, Array等
 * @param {*} val 
 */
function getRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

/**
 * 判断数据是不是Object类型的数据
 * @param {*} obj 
 */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * 判断数据是不是数组类型的数据
 * @param {*} arr 
 */
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}
// 将isArray挂载到Array上  
Array.isArray = Array.isArray || isArray

/**
 * 判断数据是不是正则对象
 * @param {*} val 
 */
function isRegExp(val) {
  return Object.prototype.toString.call(val) === '[object RegExp]'
}

/**
 * 判断数据是不是时间对象
 * @param {*} val 
 */
function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]'
}

/**
 * 判断val是否是浏览器内置函数
 * 内置函数toString后的主体代码块为[native code],而非内置函数则为相关代码，所以非内置函数可进行拷贝(toString后掐头去尾再由Function转)
 * @param {*} val 
 */
function isNative(val) {
  return typeof(val) === 'function' && /native code/.test(val.toString())
}

/**
 * 检查val是否是函数
 * @param {*} val 
 */
function isFunction(val) {
  return Object.prototype.toString.call(val) === '[object Function]'
}

/**
 * 检查数据是否是非数字值
 * 原生的isNaN会把参数转换成数字(valueof)，而null、true、false以及长度小于等于1的数组(元素为非NaN数据)会被转换成数字，
 * 这不是我想要的。Symbol类型的数据不具有valueof接口，所以isNaN会抛出错误，这里放在后面，可避免错误
 * @param {*} v 
 */
function _isNaN(v) {
  return !(typeof v === 'string' || typeof v === 'number') || isNaN(v);
}

/**
 * 检查val是否为有效的类数组长度
 * @param {*} val 
 */
function isLength(val) {
  return typeof val == 'number' && val > -1 && value % 1 == 0 && val <= Number.MAX_SAFE_INTEGER;
}

/**
 * 检查val是否是类数组
 * 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，
 * 大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER。这里字符串也将被当作类数组。
 * @param {*} val 
 */
function isArrayLike(val) {
  return val != null && isLength(val.length) && !isFunction(val)
}

/**
 * 判断字符是否空NULL
 * @param {*} chars 
 */
function isNULL( chars ) {
  if (chars == null)
    return true;
  if (jsTrim(chars).length==0)
    return true;
  return false;
}

/**
 * 检查val是否是空
 * 如果是null，直接返回true；如果是类数组，判断数据长度；如果是Object对象，判断是否具有属性；
 * 如果是其他数据，直接返回false(也可改为返回true)
 * @param {*} val 
 */
function isEmpty(val) {
  if (val == null) {
    return true;
  }
  if (isArrayLike(val)) {
    return !val.length;
  } else if (isPlainObject(val)) {
    for (let key in val) {
      if (hasOwnProperty.call(val, key)) {
        return false;
      }
    }
  }
  return false;
}

// 检测是否为PC端浏览器模式
function isPCBroswer() {
  let e = navigator.userAgent.toLowerCase()
      , t = "ipad" == e.match(/ipad/i)
      , i = "iphone" == e.match(/iphone/i)
      , r = "midp" == e.match(/midp/i)
      , n = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)
      , a = "ucweb" == e.match(/ucweb/i)
      , o = "android" == e.match(/android/i)
      , s = "windows ce" == e.match(/windows ce/i)
      , l = "windows mobile" == e.match(/windows mobile/i);
  return !(t || i || r || n || a || o || s || l)
}