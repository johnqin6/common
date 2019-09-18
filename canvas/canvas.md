# canvas画布用法学习

## canvas基础用法
1. 添加`canvas`标签
canvas画布需要使用`<canvas></canvas>`标签，并设置canvas标签的宽和高，canvas标签之间可以嵌入
提示信息，当用户浏览器不支持canvas元素时显示，可以友好的提示用户。   
canvas标签使用的注意点：   
- canvas标签应首先设置宽和高，没有宽高，canvas元素区域将无法显示，也无法在此区域画图
- canvas标签的宽高只能用标签上的属性width和height设置,用css样式设置的大小会导致画布
  按比例缩放设置的值（css只是设置canvas在屏幕的显示大小）,因此得到的效果是有误的(出现
  变形现象)
- canvas画布的宽高只能通过数值设定，不能使用百分比

canvas标签使用示例

```html
<canvas id="canvas" width="400" height="300">抱歉，您的浏览器不支持canvas元素</canvas>
```

2. 获取`canvas`上下文对象(使用getContext()方法，参数：'2d')

```javascript
var canvas = document.getElementById('canvas')
//检测浏览器是否支持canvas 该方法是否存在 取得上下文对象
if (canvas.getContext) {
  // 获取上下文
  var context = canvas.getContext('2d')
}
```

3. 在canvas中绘制简单的2D图像-矩形
  - 指定填充(fillStyle)颜色或描边(strokeStyle)颜色
  - 指定填充绘制矩形(fillRect())还是描边绘制矩形(strokeRect())

```javascript
// 填充颜色为红色
context.fillStyle = 'red'
// 边框颜色为蓝色
context.strokeStyle = 'blue'
// 用指定的颜色填充矩形 参数：x, y, w(宽), h(高)
context.fillRect(10, 10, 150, 150)
// 用指定的颜色为矩形描边
context.strokeRect(10, 10, 150, 150)
```

4. 将canvas绘制的图形导出到页面

```javascript
// 获取图像的数据URL 默认图片格式为png, 可自行设置格式
  var imgURL = canvas.toDataURL('image/png')
  // 添加一个img元素
  var image = document.createElement('img')
  // 将获取的图像的URL赋值给src属性
  image.src = imgURL
  // 将元素添加到页面
  document.body.appendChild(image)
```

5. 完整示例

```html
<body>
  <canvas id="canvas" width="400" height="300">抱歉，您的浏览器不支持canvas元素</canvas>
</body>
<script>
var canvas = document.getElementById('canvas')
//检测浏览器是否支持canvas 该方法是否存在 取得上下文对象
if (canvas.getContext) {
  // 获取上下文
  var context = canvas.getContext('2d')
  // 填充颜色为红色
  context.fillStyle = 'red'
  // 边框颜色为蓝色
  context.strokeStyle = 'blue'
  // 用指定的颜色填充矩形 参数：x, y, w(宽), h(高)
  context.fillRect(10, 10, 150, 150)
  // 用指定的颜色为矩形描边
  context.strokeRect(10, 10, 150, 150)

  // 获取图像的数据URL 默认图片格式为png, 可自行设置格式
  var imgURL = canvas.toDataURL('image/png')
  // 添加一个img元素
  var image = document.createElement('img')
  // 将获取的图像的URL赋值给src属性
  image.src = imgURL
  // 将元素添加到页面
  document.body.appendChild(image)
}
</script>
```

效果图   
![效果图](./images/init.png)

## 绘制矩形

绘制矩形常用的方法：
- fillRect(x, y, w, h): 填充矩形，参数: 矩形的x,y坐标，宽(w)高(h)
- strokeRect(x, y, w, h): 描边矩形，参数同上
- clearRect(): 清除canvas区域内的矩形,也可以消除一部分，生成有意思的图形 参数同上
绘制矩形相关属性设置: 
- lineWidth: 表示描边线的宽度
- lineCap: 用于控制线条末端的形状，平头(butt)、圆头(round)、方头(square)。
- lineJoin: 用于控制线条相交的方式，圆交(round)、斜交(bevel)、斜接(miter)。
> 注: 实测lineCap, lineJoin属性对无论填充或描边矩形都不起作用  
> 当指定的填充颜色或指定的描边颜色用“rgba()”形式表示时，可以用于绘制透明形的矩形。  

代码示例：
```html
<body>
  <canvas id="canvas" width="900" height="500"></canvas>
</body>

<script>
var canvas = document.getElementById('canvas')
var cxt = canvas.getContext('2d') // 获取上下文
// 绘制填充的矩形
cxt.fillStyle = 'red'
cxt.fillRect(10, 10, 150, 150)

// 绘制描边的矩形
cxt.strokeStyle = 'blue'
// 设置描边宽度
cxt.lineWidth = 2 // 默认宽度为1px
cxt.strokeRect(200, 10, 150, 150)

// 绘制带描边的填充矩形
cxt.fillStyle = 'yellow'
cxt.strokeStyle = 'red'
cxt.fillRect(400, 10, 150, 100)
cxt.strokeRect(400, 10, 150, 100)

// 绘制中间镂空的矩形
cxt.fillStyle = 'red'
cxt.fillRect(600, 10, 150, 150)
// 清空某一区域的矩形
cxt.clearRect(650, 60, 50, 50)

// 绘制相交的矩形
cxt.fillStyle = 'yellow'
cxt.strokeStyle = 'red'
cxt.fillRect(10, 180, 150, 150)
cxt.strokeRect(110, 280, 100, 100)

// 实测lineCap, lineJoin属性对无论填充或描边矩形都不起作用
cxt.strokeStyle = 'yellow'
cxt.lineCap = 'round'
cxt.lineJoin= 'round'
cxt.strokeRect(230, 180, 150, 150)
</script>
```

效果图
![矩形](./images/rect.png)    

## 绘制路径

绘制路径方法：
- moveTo(x, y): 定义线条开始坐标
- lineTo(x, y): 定义线条结束坐标

