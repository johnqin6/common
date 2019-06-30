/**
 * Function Skill: 函数技巧
 */

 //1, 函数自执行
var Func = function() {}(); // 常用

(function() {})(); // 常用
(function() {}()); // 常用
[function() {}()];

+ function() {}();
- function() {}();
~ function() {}();
! function() {}();

new function() {};
new function() {}();
void function() {}();
typeof function() {}();
delete function() {}();

1, function() {}();
1 ^ function() {}();
1 > function() {}();

// 2, 隐式返回值：只能用于单语句返回值箭头函数，如果返回值是对象必须使用()包住
var Func = function(name) {
    return "I Love " + name;
};
// 换成
var Func = name => "I Love " + name;

//3, 一次性函数：适用于运行一些只需执行一次的初始化代码
function Func() {
    console.log("x");
    Func = function() {
        console.log("y");
    }
}

//4, 优雅处理错误信息
try {
    Func();
} catch (e) {
    location.href = "https://stackoverflow.com/search?q=[js]+" + e.message;
}

// 5,优雅处理Async/Await参数
function AsyncTo(promise) {
    return promise.then(data => [null, data]).catch(err => [err]);
}
var [err, res] = await AsyncTo(Func());
console.log(err, res);

//6, 优雅处理多个函数返回值
function Func() {
    return Promise.all([
        fetch("/user"),
        fetch("/comment")
    ]);
}
var [user, comment] = await Func(); // 需在async包围下使用

