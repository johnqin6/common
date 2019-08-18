/**
 * 工具方法
 */

/**
 * 记忆函数：缓存函数的运算结果
 * @param {Function} fn 
 */
function cached(fn) {
  let cache = Object.create(null);
  return function cachedFn(str) {
    let hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * 根据字符串路径获取对象属性 : 'obj[0].count'
 * @param {*} obj 
 * @param {*} path 
 * @param {*} strict 
 */
function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)]/g, '.$1'); // 将[0]转化为.0
  path = path.replace(/^\./, '');  // 去除开头的.

  let keyArr = path.split('.'); // 根据.切割
  let i = 0;
  for (let len= keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) { //开启严格模式，没找到对应key值，抛出错误
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj, // 原始数据
    k: keyArr[i],  // key值
    v: tempObj ? tempObj[keyArr[i]] : null // key值对应的值
  }
}

/**
 * 获取Url参数，返回一个对象
 */
function getUrlParam() {
  let url = docuemnt.location.toString();
  let arrObj = url.split("?");
  let params = Object.create(null);
  if (arrObj.length > 1) {
    arrObj = arrObj[1].split("=");
    arrObj.forEach(item => {
      item = item.split("=");
      params[item[0]] = item[1]
    })
  }
  return params;
}
// ?a=1&b=2&c=3 ==> {a: "1", b: "2", c: "3"}

/**
 * base64数据导出文件，文件下载
 * @param {*} filename 文件名
 * @param {*} data base64数据
 */
function downloadFile(filename, data) {
  let DownloadLink = document.createElement('a');

  if (DownloadLink) {
    document.body.appendChild(DownloadLink);
    DownloadLink.style = 'display: none';
    DownloadLink.download = filename;
    DownloadLink.href = data;

    if (document.createEvent) {
      let DownloadEvt = document.createEvent('MouseEvents');

      DownloadEvt.initEvent('click', true, false);
      DownloadLink.dispatchEvent(DownloadEvt);
    } else if (document.createEventObject) {
      DownloadLink.fireEvent('onclick');
    } else if (typeof DownloadLink.onclick == 'function') {
      DownloadLink.onclick();
    }
    document.body.removeChild(DownloadLink);
  }
}

/**
 * 返回一个lower - upper之间的随机数
 * lower、upper无论正负与大小，但必须是非NaN的数据
 * @param {*} lower 
 * @param {*} upper 
 */
function random(lower, upper) {
  lower = +lower || 0
  upper = +upper || 0
  return Math.random() * (upper - lower) + lower
}

/**
 * 金钱格式化  1234567, 1,234,567
 * @param {*} str 
 */
function formatCash(str) {
  str = str.toString();
  var reg = /\B(?=(\d{3})+(?!\d))/g;
  return str.replace(reg, ',');
}

function formatCash2(str) {
  str = str.toString();
  return str.split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev
  })
}
