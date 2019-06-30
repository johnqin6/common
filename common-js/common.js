/**
 * js开发中常用的开发技巧和方法
 * String Skill: 字符串技巧
 * Number Skill: 数值技巧
 * Boolean Skill: 布尔值技巧
 * Array Skill: 数组技巧
 * Object Skill: 对象技巧
 * Function Skill: 函数技巧
 * DOM Skill: DOM技巧
 */

/**
 * String Skill: 字符串技巧
 * 1，时间对比：时间个位数形式需补0
 */
const time1 = "2019-02-21 19:00:00";
const time2 = "2019-04-21 19:06:00";
const overtime = time1 > time2;
console.log(overtime); //overtime => false

//2, 格式化金钱 带小数无效
const thousand = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
const money = thousand(1235678912);
console.log(money); //money => "1,235,678,912"

//3, 生成随机ID
const randomId = len => Math.random().toString(36).substr(3, len);
const id = randomId(11);
console.log(id); //gpmgnrnop3

//4, 生成随机HEX色值
const randomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
const color = randomColor();
console.log(color); //#b49c67

//5, 生成星际评分
const startScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = startScore(3);
console.log(start); // start => "★★★☆☆"

//6, 操作URL查询参数
const params = new URLSearchParams(location.search); // location.search = "?name=yajun&sex=female"
console.log(params);
params.has("yajun"); // true
params.get("sex"); // "female"

/**
 * Number Skill: 数值技巧
 * 1, 取整：代替正数的Math.floor()，代替负数的Math.ceil()
 */
const num1 = ~~ 1.68;
const num2 = 1.68 | 0;
const num3 = 1.68 >> 0;
console.log(num1,num2,num3); //num1 num2 num3 => 1 1 1

//2, 补零
const fillZero = (num, len) => num.toString().padStart(len, "0");
const num = fillZero(169,5);
console.log(num); //num => "00169"

//3, 转数值：只对null, "", false,数值字符串有效
const n1 = +null;
const n2 = +"";
const n3 = +false;
const n4 = +'168';
console.log(n1,n2,n3,n4); //n1 n2 n3 n4 => 0 0 0 168

//4, 精确小数
var round = (num, decimal) => Math.round(num * 10 * decimal) / 10 * decimal;
var number = round(1.69,1);
console.log(number); // number => 1.7

//5, 判断奇偶
var number = 0;
var odd = !!(number & 1);
console.log(odd); //odd => false

//6, 取最小最大值
var arr = [0,1,2,3];
var min = Math.min(...arr);
var max = Math.max(...arr);
console.log(min,max); // min max => 0 3

/**
 * Boolean Skill: 布尔值技巧
 * 1, 短路运算符
 */

// var a = d && 1; // 满足条件赋值：取假运算，从左到右依次判断，遇到假值返回假值，后面不再执行，否则返回最后一个真值
// var b = d || 1; // 默认赋值：取真运算，从左到右依次判断，遇到真值返回真值，后面不再执行，否则返回最后一个假值
// var c = !d; // 取假赋值：单个表达式转换为true则返回false，否则返回true
// console.log(a,b,c); //a b c => false true true

//2, 是否为空数组
var arr = [];
var flag = Array.isArray(arr) && !arr.length;
console.log(flag); // flag => true

//3, 是否为空对象
var obj = {};
var flag = !Array.isArray(obj) && Object.prototype.toString.call(obj) && !Object.keys(obj).length;
console.log(flag); //flag => true

//4, 满足条件时执行
var flagA = true; // 条件A
var flagB = false; // 条件B
(flagA || flagB) && Func(); // 满足A或B时执行
(flagA || !flagB) && Func(); // 满足A或不满足B时执行
flagA && flagB && Func(); // 同时满足A和B时执行
flagA && !flagB && Func(); // 满足A且不满足B时执行

//5, 为非假值时执行
var flag = false; // undefined、null、""、0、false、NaN
!flag && Func();

//6, 数组不为空时执行
var arr = [0, 1, 2];
arr.length && Func();

//7, 对象不为空时执行
var obj = { a: 0, b: 1, c: 2 };
Object.keys(obj).length && Func();

//8, 函数退出代替条件分支退出
if (flag) {
    Func();
    // return false;
}
// 换成
if (flag) {
    // return Func();
}

function Func(){
    console.log(111);
}