/**
 * 数组操作相关函数
 * es5内置函数
 *   - push()  
 *     + 向数组尾部添加新元素 会改变原数组，无返回值 
 *     + 例子：[1, 2, 3].push(4) --> [1, 2, 3, 4]
 *   - pop() 
 *     + 删除数组尾部最后一个元素 会改变原数组，无返回值 
 *     + 例子：[1, 2, 3, 4].pop() --> [1, 2, 3]
 *   - unshift() 
 *     + 向数组头部添加新元素 会改变原数组，无返回值 
 *     + 例子：[1, 2, 3].push(4) --> [4, 1 , 2, 3]
 *   - shift() 
 *     + 删除数组首部元素 会改变原数组，无返回值
 *     + 例子：[1, 2, 3, 4].shift() --> [2, 3, 4]
 *   - indexOf() 和 lastIndexOf()
 *     + 获取数组某一项元素的下标  返回数组下标
 *     + 例子 [1, 2, 3, 4].indexOf(3)  --> 2
 *   - sort() 
 *     + 数组排序，会改变原数组，无返回值 
 *     + 例子 [1, 3, 2, 4].sort()  --> [1, 2, 3, 4]
 *   - concat() 
 *     + 合并多个数组, 返回合并的新数组
 *     + 例子 [1, 3, 2, 4].concat([5, 6])  --> [1, 2, 3, 4, 5, 6]
 *   - reverse()
 *     + 数组项倒置, 返回倒置的新数组
 *     + 例子 [1, 3, 2, 4].reverse()  --> [4, 2, 3, 1]
 *   - slice(start, end)
 *     + 截取指定位置的数组项, 参数：开始位置，结束位置, 返回截取的数组
 *     + 例子：[1, 2, 3, 4].slice(1, 2) --> [2, 3]
 *   - splice(开始位置， 删除的个数，元素)
 *     + 可实现对数组的增，删，改，改变原数组，无返回值
 *     + 增：var arr = [1, 2, 3]; arr.splice(1, 'he') --> [1, 'he', 2, 3] 
 *     + 删：var arr = [1, 2, 3]; arr.splice(1, 1) --> [1, 3] 
 *     + 改：var arr = [1, 2, 3]; arr.splice(1, 1, 'he') --> [1, 'he', 3]
 *   - forEach()
 *     + 数组遍历，参数：回调函数(参数item: 数组项，index: 下标)
 *     + 例子：[1, 2, 3, 4].forEach((item, index) => {
 *         console.log(item, index) // 1 => 0, 2 => 1 ...
 *       })  
 *   - toString() 
 *     + 将数组转为字符串, 返回值：字符串
 *     + [1, 2, 3].toString --> '1, 2, 3'
 *   - toLocaleString() 
 *     + 将数组转为本地字符串, 返回值：字符串
 *     + [1, 2, 3].toString --> '1, 2, 3'  
 *   - join()
 *     + 将数组用指定的字符拼接，参数：拼接符 返回值：拼接后的字符串
 *     + [1, 2, 3].join('-') --> '1-2-3'  
 *   - Array.isArray()
 *     + 判断是否是数组类型, 返回布尔值
 *     + Array.isArray([1, 2]) --> true   
 * ES6 新增方法
 *   - includes() 
 *     + 判断数组中是否存在某值, 返回布尔值
 *     + [1, 2, 3].includes(2) --> true  
 *   - every()  
 *     + 判断数组中的每一项是否都满足指定条件, 都满足返回true  
 *     + [2, 4, 6].every(item => item % 2 === 0)  -> true  
 *   - some() 
 *     + 判断数组中是否有一项满足指定条件, 有则返回true 
 *     + [1, 4, 6].some(item => item % 2 === 0)  -> true  
 *   - map()
 *     + 改变原数组的每一项, 返回改变的新数组
 *     + [1, 2, 3].map((item, index) => item = item * 2) -> [2, 4, 6]  
 *   - filter()
 *     + 根据条件过滤数组的某一项或某几项, 返回过滤后的新数组
 *     + [1, 2, 3].map((item, index) => item % 2 !== 0) -> [1, 3]  
 *   - reduce()
 *     + 奇特的数组函数，可对数组进行特殊的操作，返回操作后的结果
 *     + [1, 2, 3].reduce((a, b) => a + b, 0) -> 6  相当于将数组的每一项相加的和  
 *   - find()
 *     + 找出第一个符合条件的数组成员, 返回符合的数组成员, 没有返回undefined
 *     + [1, 4, 6].find(item => item % 2 === 0) -> 4  
 *   - findIndex()
 *     + 找出第一个符合条件的数组成员的下标, 返回符合的数组成员的下标, 没有返回-1
 *     + [1, 4, 6].findIndex(item => item > 4) -> 2   
 *   - fill(填充的值，开始位置，结束位置) 
 *     + 使用给定的值填充数组, 返回填充后的数组
 *     + ['a', 'b', 'c'].fill(7) -> [7, 7, 7]
 *     + ['a', 'b', 'c'].fill(7, 1, 2) -> ["a", 7, "c"]  
 *   - flat()
 *     + 将嵌套的数组“拉平”, 参数：整数，表示想要拉平的层数，默认为1 
 *     + [1, 2, [3, [4, 5]]].flat() -> [1, 2, 3, [4, 5]]
 *     + [1, 2, [3, [4, 5]]].flat(2) -> [1, 2, 3, 4, 5]
 *   - flatMap()
 *     + 对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），
 *       然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
 *     + [2, 3, 4].flatMap((x) => [x, x * 2]) -> [2, 4, 3, 6, 4, 8]
 *     + 只能展开一层数组 
 *     + [1, 2, 3, 4].flatMap(x => [[x * 2]]) -> [[2], [4], [6], [8]]
 *   - copyWithin(target, start = 0, end = this.length)
 *     + 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
 *     + [1, 2, 3, 4, 5].copyWithin(0, 3) -> [4, 5, 3, 4, 5]
 *     + [1, 2, 3, 4, 5].copyWithin(0, 3, 4) -> [4, 2, 3, 4, 5]  
 *   - from()
 *     + 将类数组对象转为数组
 *     + let arrayLike = { '0': 'a','1': 'b','2': 'c',length: 3}; 
 *       * es5: [].slice.call(arrayLike) -> ['a', 'b', 'c']
 *       * es6: Array.from(arrayLike) -> ['a', 'b', 'c']  
 *   - entries()
 *     + 对数组键值对的遍历
 *     + for (let [index, elem] of ['a', 'b'].entries()) {
 *             console.log(index, elem); // 0 -> 'a', 1 -> 'b'
 *        }
 *   - keys()
 *     + 对数组键值的遍历
 *     + for (let [index, elem] of ['a', 'b'].keys()) {
 *             console.log(index, elem); // 0, 1
 *        }
 *   - values()
 *     + 对数组值的遍历
 *     + for (let [index, elem] of ['a', 'b'].values()) {
 *             console.log(index, elem); // 'a', 'b'
 *        }
 */


/**
 * 求取数组中非NaN数据中的最大值
 * @param {*} arr 
 */
function max(arr) {
  arr = arr.filter(item => !_isNaN(item));
  return arr.length ? Math.max.apply(null, arr) : undefined;
}

/**
 * 求取数组中非NaN数据中的最小值
 * @param {*} arr 
 */
function min(arr) {
  arr = arr.filter(item => !_isNaN(item));
  return arr.length ? Math.min.apply(null, arr) : undefined;
}

/**
 * 数组求和
 * @param {*} arr 
 */
function sum(arr) {
  var sum = 0;
  arr.forEach(function (item) {
    sum += item;
  });
  return sum;
}

/**
 * 数组求和(ES6的reduce方法)
 * @param {*} arr 
 */
function sum2(arr) {
  return arr.reduce((a, b) => {
    return a + b; 
  }, 0);
}

/**
 * 筛选数组中元素为奇数的项
 * @param {*} arr 
 */
function odd(arr) {
  return arr.filter(item => item % 2 !== 0);
}

/**
 * 筛选数组中元素为偶数的项
 * @param {*} arr 
 */
function even(arr) {
  return arr.filter(item => item % 2 === 0);
}

/**
 * 筛选数组中奇数项
 * @param {*} arr 
 */
function oddItem(arr) {
  return arr.filter((item, index) => index % 2 !== 0);
}

/**
 * 数组中每一项乘2
 * @param {*} arr 
 */
function doubleWithArrItem(arr) {
  return arr.map(item => item = item * 2);
}

/**
 * 数组去重
 * @param {Array} arr 
 */
function unique(arr) {
  if (!isArrayLink(arr)) {  // 不是类数组对象
    return arr
  }
  let result = []
  let objarr = []
  let obj = Object.create(null) 

  arr.forEach(item => {
    if (isStatic(item)) { //是除了symbol外的原始数据
      let key = item + '_' + getRawType(item)
      if (!obj[key]) {
        obj[key] = trueresult.push(item)
      }
    } else { //引用类型及symbol
      if (!objarr.includes(item)) {
        objarr.push(item)
        result.push(item)
      }
    }
  })

  return result
}

/**
 * 数组去重（使用ES6的new Set()和解构）
 * @param {*} arr 
 */
function unique2(arr) {
  var _arr = new Set(arr);
  return [..._arr];
}

/**
 * 数组升序排列
 * @param {*} arr 
 */
function ascdOrder(arr) {
  var _arr = arr;
  _arr.sort(function(a, b) {
    return a - b;
  });
  return _arr;
}

/**
 * 数组降序排列
 * @param {*} arr 
 */
function descOrder(arr) {
  var _arr = [...arr];
  _arr.sort(function(a, b) {
    return b - a;
  });
  return _arr;
}

/**
 * 数组选项对调
 * @param {Array} arr 
 * @param {Number} from 
 * @param {Number} to 
 */
function exchangeArrItem(arr, from, to) {
  var _arr = [...arr];
  _arr.splice(to, 1, ..._arr.splice(from, 1, _arr[to]));
  return _arr;
}

/**
 * 随机打乱数组（混淆数组）
 * @param {*} arr 
 */
function upset(arr) {
  return arr.slice().sort(() => Math.random() - .5);
}

/**
 * 统计数组元素在数组中出现的次数
 * @param {Array} arr 
 * return {Object} 返回统计后的对象
 */
function countWithArrItem(arr) {
  return arr.reduce((t,c) => {
      t[c] = t[c] ? ++ t[c] : 1;
      return t;
  }, {});
}
