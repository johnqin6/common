/**
 * 浏览器相关方法
 */

/**
 * 获取浏览器信息
 */
function getExplorerInfo() {
  let t = navigator.userAgent.toLowerCase();
  return 0 <= t.indexOf('msie') ? { // ie < 11
    type: 'IE',
    version: Number(t.match(/msie ([\d]+)/)[1])
  } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? { // ie11
    type: 'IE',
    version: 11
  } : 0 < t.indexOf('edge') ? {
    type: 'Edge',
    version: Number(t.match(/edge\/([\d]+)/)[1])
  } : 0 <= t.indexOf('firefox') ? {
    type: 'Firefox',
    version: Number(t.match(/firefox\/([\d]+)/)[1])
  } : 0 <= t.indexOf("chrome") ? {
    type: "Chrome",
    version: Number(t.match(/chrome\/([\d]+)/)[1])
  } : 0 <= t.indexOf("opera") ? {
      type: "Opera",
      version: Number(t.match(/opera.([\d]+)/)[1])
  } : 0 <= t.indexOf("Safari") ? {
      type: "Safari",
      version: Number(t.match(/version\/([\d]+)/)[1])
  } : {
      type: t,
      version: -1
  }
}

/**
 * 识别各种浏览器及平台
 */
function getBrowserOrPlatform() {
  // 运行环境是浏览器
  let inBrowser = typeof window !== 'undefind';
  // 运行环境是微信
  let inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  let weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  // 浏览器UA判断
  let UA = inBrowser && window.navigator.userAgent.toLowerCase();
  let isEdge = UA && UA.indexOf('edge/') > 0;
  if (UA && /ipone|ipad|ipod|ios/.test(UA) || (weexPlatform === 'ios')) {
    return 'ios';
  } else if ((UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')) {
    return 'android';
  } else if (isEdge) {
    return 'edige';
  } else if (UA && UA.indexOf('msie 9.0') > 0) {
    return 'IE9';
  } else if (UA && /msie|trident/.test(UA)) {
    return 'IE'
  } else if (UA && /chrome\/\d+/.test(UA) && !isEdge) {
    return 'chrome'
  }
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

// 利用performance.timing进行性能分析
window.onload = function() {
  setTimeout(function() {
    let t = performance.timing;
    console.log('DNS查询耗时 ：' + (t.domainLookupEnd - t.domainLookupStart).toFixed(0))
    console.log('TCP链接耗时 ：' + (t.connectEnd - t.connectStart).toFixed(0))
    console.log('request请求耗时 ：' + (t.responseEnd - t.responseStart).toFixed(0))
    console.log('解析dom树耗时 ：' + (t.domComplete - t.domInteractive).toFixed(0))
    console.log('白屏时间 ：' + (t.responseStart - t.navigationStart).toFixed(0))
    console.log('domready时间 ：' + (t.domContentLoadedEventEnd - t.navigationStart).toFixed(0))
    console.log('onload时间 ：' + (t.loadEventEnd - t.navigationStart).toFixed(0))

    if(t = performance.memory){
        console.log('js内存使用占比 ：' + (t.usedJSHeapSize / t.totalJSHeapSize * 100).toFixed(2) + '%')
    }
  },100)
}

// 禁止某些键盘事件
document.addEventListener('keydown', function(event) {
  return !(
    112 == event.keyCode || // F1
    123 == evemt.keyCode || // F2
    event.ctrlKey && 82 == event.keyCode || // ctrl + R
    event.ctrlKey && 78 == event.keyCode || // ctrl + N
    event.shiftKey && 121 == event.keyCode || // shift + F10
    event.altKey && 115 == event.keyCode || // alt + F4
    "A" == event.srcElement.tagName && event.shiftKey // shift + 点击a标签
  ) || (event.returnValue = false);
});

// 禁止右键、选择、复制
['contextmenu', 'selectstart', 'copy'].forEach(function(ev) {
  document.addEventListener(ev, function(event) {
    return event.returnValue = false;
  })
})

/**
 * 全屏
 */
function toFullScreen() {
  let elem = document.body;
  elem.webkitRequestFullScreen
  ? elem.webkitRequestFullScreen() 
  : elem.mozRequestFullScreen
  ? elem.mozRequestFullScreen()
  : elem.msRequestFullScreen
  ? elem.msRequestFullScreen()
  : elem.requestFullScreen
  ? elem.requestFullScreen()
  : alert('浏览器不支持全屏');
}

/**
 * 退出全屏
 */
function exitFullscreen(){
  let elem = parent.document;
  elem.webkitCancelFullScreen
  ? elem.webkitCancelFullScreen()
  : elem.mozCancelFullScreen
  ? elem.mozCancelFullScreen()
  : elem.cancelFullScreen
  ? elem.cancelFullScreen()
  : elem.msExitFullscreen
  ? elem.msExitFullscreen()
  : elem.exitFullscreen
  ? elem.exitFullscreen()
  : alert("切换失败,可尝试Esc退出");
}

// window动画
window.requestAnimationFrame = window.requestAnimationFrame ||
       window.webkitCancelAnimationFrame || 
       window.mozRequestAnimationFram || 
       window.msRequestAnimationFram ||
       window.oRequestAnimationFram ||
       function (callback) {
         //为了使setTimteout的尽可能的接近每秒60帧的效果
        window.setTimeout(callback, 1000 / 60);
       };
window.cancelAnimationFrame = window.cancelAnimationFrame ||
       Window.webkitCancelAnimationFrame ||
       window.mozCancelAnimationFrame ||
       window.msCancelAnimationFrame ||
       window.oCancelAnimationFrame ||
       function (id) {
           //为了使setTimteout的尽可能的接近每秒60帧的效果
           window.clearTimeout(id);
       }
