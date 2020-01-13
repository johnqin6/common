/**
 * 压缩函数和解压缩函数
 */
const zlib = require('zlib');
const fs = require('fs');

/**
 * 压缩文件方法 
 * @param {*} inp 要压缩的文件
 */
function compress(inp) {
  const gzip = zlib.createGzip();
  // 创建一个读取流
  const inpObj = fs.createReadStream(inp);
  // 创建一个写入流
  const outObj = fs.createWriteStream(inp + '.gz');
  // 管道
  inpObj.pipe(gzip)
    .pipe(outObj)
}

/**
 * 解压文件
 * @param {*} inp 
 */
function ungzip(inp) {
  const gunzip = zlib.createGunzip();
  const gzip = zlib.createGzip();
  // 创建一个读取流
  const inpObj = fs.createReadStream(inp + '.gz');
  // 创建一个写入流
  const outObj = fs.createWriteStream(inp);
  // 管道
  inpObj.pipe(gunzip)
    .pipe(outObj)
}

//-----对数据进行压缩与解压-----------------
let data = 'hello wrold';

/**
 * 压缩数据
 * @param {*} data 
 */
function gzipData(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (err, buffer) => {
      if (err) {
        reject(err);
      }
      resolve(buffer);
    })
  })
};

/**
 * 解压缩数据
 * @param {*} data 
 */
function unGzipData(data) {
  return new Promise((resolve, reject) => {
    zlib.unzip(data, (err, buffer) => {
      if (err) {
        reject(err);
      }
      resolve(buffer.toString());
    })
  })
};


// compress('../demo/1.txt')
// ungzip('../demo/1.txt')
gzipData(data).then(res => {
  console.log(res);
  return unGzipData(res);
}).then(res => {
  console.log(res);
});
