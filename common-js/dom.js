/**
 * DOM Skill: DOM技巧
 */
//1, 显示全部DOM边框：调试页面元素边界时使用
// [].forEach.call($$("*"), dom => {
//     dom.style.outline = "1px so;id #" + (~~(Math.random() * (1 << 24))).toString(16);
// });

//2, 自适应页面：页面基于一张设计图但需做多款机型自适应，元素尺寸使用rem进行设置
function AutoResponse(width = 750) {
    var target = document.documentElement;
    target.clientWidth >= 600 ? (target.style.fontSize = "80px") 
    : (target.style.fontSize = target.clientWidth / width * 100 + "px");
    console.log(target.style.fontSize);
}
AutoResponse();
