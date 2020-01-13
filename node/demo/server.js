/**
 * post提交示例
 */
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  let { pathname, query } = url.parse(req.url);
  query = querystring.parse(query);
  if (pathname === '/post') {
    let str = '';
    req.on('data', (err, data) => {
      if (err) {
        console.log(err);
        res.end(err);
      }
      str += data;
    });

    req.on('end', (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      }
      console.log(str);
      res.writeHead(200, { 'content-type':'text/html;charset=utf-8'});
      res.end(str);
    });
  }
});

server.listen(3000, () => {
  console.log('http://localhost:3000已开启');
})
