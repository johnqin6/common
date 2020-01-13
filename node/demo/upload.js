/**
 * post提交示例
 */
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const path = require('path');
const uuid = require('../utils/uuid')

const server = http.createServer((req, res) => {
  let { pathname, query } = url.parse(req.url);
  if (pathname === '/upload') {
    req.setEncoding('binary');
    let body = '';
    // 边界字符串
    let boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '');
    console.log(boundary);

    // 接收post如 data 流 buffer
    req.on('data', (d) => {
      body += d;
    });

    req.on('end', (err) => {
      let file = querystring.parse(body, '\r\n', ':');
      let fileInfo = file['Content-Disposition'].split('; ');
      let fileName = '';
      let ext = '';
      for (let value in fileInfo) {
        if (fileInfo[value].indexOf("filename=") != -1) {
          fileName = fileInfo[value].substring(10, fileInfo[value].length - 1);

          if (fileName.indexOf('\\') != -1) {
            fileName = fileName.substring(fileName.lastIndexOf('\\') + 1);
          }
          ext = fileName.substr(fileName.indexOf('.') + 1, fileName.length);
        }
      }

      let upperBoundary = body.toString().indexOf(file['Content-Type'].substring(1)) + file['Content-Type'].substring(1).length;

      let binaryDataAlmost = body.toString().substring(upperBoundary).replace(/^\s\s*/, '').replace(/\s\s*$/, '');

      // 上传文件重命名
      let uuidFileName = `${uuid()}.${ext}`
      //上传文件 本地存放地址
      let uploadDirFile = `./upload/${uuidFileName}`
      console.log(uploadDirFile);

      //创建文件流
      let writerStream = fs.createWriteStream(uploadDirFile);
      //开始 —— 写入文件到本地
      writerStream.write(binaryDataAlmost.substring(0, binaryDataAlmost.indexOf(`--${boundary}--`)), 'binary');
      
      //写入完成
      writerStream.end();
      writerStream.on('finish', function () {
        console.log("写入完成。");
        //删除刚刚创建好的本地文件 -> 只有在把文件存起来的时候需要删除掉本地，否则不要用。
        // fs.unlinkSync(uploadDirFile)
        res.end(`{ data: '', code: 0, msg: 'ok' }`)
      });

    });
  }
});

server.listen(3000, () => {
  console.log('http://localhost:3000已开启');
})
