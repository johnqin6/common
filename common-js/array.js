/**
 *  Array Skill: 数组技巧
 */
//1, 克隆数组
var _arr = [0,1,2];
var arr = [..._arr];
console.log(arr); //arr => [0,1,2]

//2, 合并数组
var arr1 = [1,2,3];
var arr2 = [4,5];
var arr = [...arr1,...arr2];
console.log(arr); // arr => [1,2,3,4,5]

//3, 去重数组
var arr = [...new Set([0,1,1,null,null])];
console.log(arr); //arr => [0,1,null]

//4, 混淆数组
var arr = [0, 1, 2, 3, 4, 5].slice().sort(() => Math.random() - .5);
console.log(arr); // arr => [3, 1, 5, 0, 4, 2]

//5, 交换赋值
var a = 0,
    b = 1;
[a, b] = [b, a];
console.log(a, b); // a, b => 1, 0

// 6, 过滤空值：underfined, null, "", 0, false, NaN
var arr = [undefined, null, "", 0, 1, false, NaN, 2].filter(Boolean);
console.log(arr); // arr => [1, 2] 

// 7, 异步累计
async function Func(deps) {
    return deps.reduce(async(t, v) => {
        var dep = await t;
        var version = await Todo(v);
        dep[v] = version;
        return dep;
    }, Promise.resolve({}));
}
Func([1,2,3]);
function Todo(v) {
    console.log(v);
}
// var result = await Func(); // 需在async包围下使用
// console.log(result);

// 8, 首部插入元素
var arr = [1, 2];
arr.unshift(0);
arr = [0].concat(arr);
arr = [2, ...arr];
console.log(arr); // [2,0,0,1,2]

//9, 尾部插入元素
var arr = [0, 1];
arr.push(2);
arr.concat(3);
arr[arr.length] = 4;
arr = [...arr, 5];
console.log(arr); // arr => [0,1,2,3,4,5]

//10, 统计元素个数
var arr = [0, 1, 2, 1, 2, 2];
var count = arr.reduce((t,c) => {
    t[c] = t[c] ? ++ t[c] : 1;
    return t;
}, {});
console.log(count); // count => { 0: 1, 1: 2, 2: 3}

//11, 创建指定长度数组
var arr = [...new Array(3).keys()];
console.log(arr); // arr => [0, 1, 2]

//12, 创建指定长度且值相等的数组
var arr = [...new Array(3).keys()].fill(0);
console.log(arr); // arr => [0, 0, 0]

//13, reduce代替map和filter
//map 
var _arr = [0, 1, 2]
var arr = _arr.map(v => v * 2);
var arr = _arr.reduce((t, c) => {
    t.push(c * 2);
    return t;
}, []);
console.log(arr); // arr => [0, 2, 4]

// filter
var arr = _arr.filter(v => v > 0);
var arr = _arr.reduce((t, c) => {
    c > 0 && t.push(c);
    return t;
}, []);
console.log(arr);
// arr => [1, 2]

// map和filter
var arr = _arr.map(v => v * 2).filter(v => v > 2);
var arr = _arr.reduce((t, c) => {
    c = c * 2;
    c > 2 && t.push(c);
    return t;
}, []);
console.log(arr);
// arr => [4]
