/**
 * 时间格式相关方法
 * - 日期/时间组件方法 
 *   直接取得和设置日期值中特定部分的方法
 *   + getFullYear()  取得4位数的年份(如2007而非仅07)
 *   + getUTCFullYear()  返回UTC日期的4位数年份
 *   + setFullYear()   设置日期的年份。传入的年份值必须是4位数字(如2007而非仅07)
 *   + setUTCFullYear(年)  设置UTC日期的年份。传入的年份值必须是4位数字(如2007而非仅07)
 *   + getMonth()  返回日期中的月份,其中0表示一月,11表示十二月
 *   + getUTCMonth()   返回UTC日期中的月份,其中0表示一月,11表示十二月
 *   + setMonth(月)   设置日期的月份,其中0表示一月,11表示十二月
 *   + setUTCMonth(月)  设置UTC日期的月份,其中0表示一月,11表示十二月  
 *   + getDate()    返回日期月份中的天数(1到31)
 *   + getUTCDate()   返回UTC日期月份中的天数(1到31)
 *   + setDate(日)   设置日期月份中的天数。如果传入的值超过了该月中应有的天数,则增加月份
 *   + setUTCDate(日)  设置UTC日期月份中的天数。如果传入的值超过了该月中应有的天数,则增加月份
 *   + getDay()    返回日期中星期的星期几(其中0表示星期日,6表示星期6)
 *   + getUTCDay()    返回UTC日期中星期的星期几(其中0表示星期日,6表示星期6)
 *   + getHours()    返回日期中的小时数(0到23)
 *   + getUTCHours()   返回UTC日期中的小时数(0到23)
 *   + setHours(时)   设置日期中的小时数。传入的值超过了23则增加月份中的天数
 *   + setUTCHours(时)   设置UTC日期中的小时数。传入的值超过了23则增加月份中的天数
 *   + getMinutes()    返回日期中的分钟数(0到59)
 *   + getUTCMinutes()   返回UTC日期中的分钟数(0到59)
 *   + setMinutes(分)    设置日期中的分钟数。传入的值超过59则增加小时数
 *   + setUTCMinutes(分)   设置UTC日期中的分钟数。传入的值超过59则增加小时数
 *   + getSeconds()   返回日期中的秒数(0到59)
 *   + getUTCSeconds()   返回UTC日期中的秒数(0到59)
 *   + setSeconds(秒)    设置日期中的秒数。传入的值超过59则增加分钟数
 *   + setUTCSeconds(秒)   设置UTC日期中的秒数。传入的值超过59则增加分钟数
 *   + getMilliseconds()    返回日期中的毫秒数
 *   + getUTCMilliseconds()   返回UTC日期中的毫秒数
 *   + setMilliseconds(毫秒)   设置日期中的毫秒数
 *   + setUTCMilliseconds(毫秒)    设置UTC日期中的毫秒数
 *   + getTimezoneOffset()    返回本地时间与UTC时间相差的分钟数a
 *   + getTime()    返回表示日期的毫秒数,与valueOf()方法返回的值相同
 *   + setTime(毫秒)   以毫秒数设置日期,会改变整个日期
 * - 日期格式化的方法
 *   + toDateString()  以特定于实现的格式显示星期几、月、日和年
 *   + toTIMEstring()   以特定于地区的格式显示星期几、月、日和年
 *   + toLocaTimeString()   以特定于实现的格式显示时、分、秒
 *   + Date.toUTCString()   以特定于实现的格式完整的 UTC 日期
 * - 继承的方法
 *   + toLocalString()  按照与浏览器设置的地区相适应的格式返回日期和时间,具体格式会因浏览器而异
 *   + toString()  通常返回带有时区信息的日期和时间,其中时间一般以军用时间(即小时的范围是0-23)表示,具体格式会因浏览器而异
 *   + valueOf()   返回日期的毫秒表示,可以用来比较日期值
 * - 其他方法
 *   + parse(string)  接受一个表示日期的字符串参数,然后尝试根据这个字符串返回相应日期的毫秒数,不能转换则返回 NaN
 *   + Date.UTC(year, month[, day, hour, min, second, millisecond])
 *     根据参数返回相应日期的毫秒数,只有前两个参数是必须的,省略其它参数则统统假设为0
 *   + now()  返回表示调用这个方法时的日期和时间的毫秒数
 */

/**
 * 格式化时间
 * @param {String} formater 时间格式
 * @param {Date} t 时间
 */
function dateFormater(formater, t) {
  let date = t ? new Date(t) : new Date(),
      Y = date.getFullYear() + '',
      M = date.getMonth() + 1,
      D = date.getDate(),
      H = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();
  return formater.replace(/YYYY|yyyy/g,Y)
         .replace(/YY|yy/g, Y.substr(2,2))
         .replace(/MM/g, (M < 10 ? '0' : '') + M)
         .replace(/DD/g, (D < 10 ? '0' : '') + D)
         .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
         .replace(/mm/g, (m < 10 ? '0' : '') + m)
         .replace(/ss/g, (s < 10 ? '0' : '') + s)
}

/**
 * 将指定字符串由一种时间格式转化为另一种
 * @param {*} str 
 * @param {*} from 
 * @param {*} to 
 */
function dateStrForma(str, from, to) {
  //'20190626' 'YYYYMMDD' 'YYYY年MM月DD日'
  str += '';
  let Y = '';
  if (~(Y = from.indexOf('YYYY'))) {
    Y = str.substr(Y, 4);
    to = to.replace(/YYYY|yyyy/g,Y);
  } else if (~(Y = from.indexOf('YY'))) {
    Y = str.substr(Y, 2);
    to = to.replace(/YY|yy/g, Y)
  }

  let k, i;
  ['M', 'D', 'H', 'h', 'm', 's'].forEach( s => {
    i = from.indexOf(s + s);
    k = ~i ? str.substr(i, 2) : '';
    to = to.replace(s+s, k);
  });
  return to;
}
// dateStrForma('20190626', 'YYYYMMDD', 'YYYY年MM月DD日') ==> 2019年06月26日
// dateStrForma('121220190626', '----YYYYMMDD', 'YYYY年MM月DD日') ==> 2019年06月26日
// dateStrForma('2019年06月26日', 'YYYY年MM月DD日', 'YYYYMMDD') ==> 20190626

// 一般的也可以使用正则来实现
//'2019年06月26日'.replace(/(\d{4})年(\d{2})月(\d{2})日/, '$1-$2-$3') ==> 2019-06-26

