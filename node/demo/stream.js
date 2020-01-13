/**
 * 流操作
 */
const fs = require('fs');

/**
 * 复制文件
 * @param {*} inp 
 * @param {*} out 
 */
function copyFile(inp, out) {
  // 创建一个读取流
  const rs = fs.createReadStream(inp);
  // 创建一个写入流
  const ws = fs.createWriteStream(out);
  // 管道
  rs.pipe(ws);
}

// copyFile('./1.txt', './2.txt');
copyFile('../assets/images/1.jpg', '../assets/images/1.png');
