/**
 * Object Skill: 对象技巧
 */

 //1, 克隆对象
 var _obj = { a: 0, b: 1, c: 2};
 var obj = {..._obj};
 var obj = JSON.parse(JSON.stringify(_obj));
 console.log(obj); //obj => { a: 0, b: 1, c: 2 }

 //2, 合并对象
var obj1 = { a: 0, b: 1, c: 2 };
var obj2 = { c: 3, d: 4, e: 5 };
var obj = { ...obj1, ...obj2 };
console.log(obj); //obj => { a: 0, b: 1, c: 3, d: 4, e: 5 }

//3, 对象字面量：获取环境变量时必用此方法
var env = "prod";
var link = {
    dev: "Development Address",
    test: "Testing Address",
    prod: "Production Address"
}[env];
console.log(link); // env => "Production Address"

//4, 创建纯空对象
var obj = Object.create(null);
Object.prototype.a = 0;
console.log(obj); // obj => {}

//5, 解构嵌套属性
var obj = { a: 0, b: 1, c: { d: 2, e: 3 } };
var { c: { d, e } } = obj;
console.log(d, e); // d e => 2 3

//6, 解构对象别名
var obj = { a: 0, b: 1, c: 2 };
var { a, b: d, c: e } = obj;
console.log(a, d, e);// a d e => 0 1 2

//7,删除无用属性
var obj = {a: 0, b: 1, c: 2};
var {a, ...rest } = obj;
console.log(rest); // rest => {b: 1, c: 2}