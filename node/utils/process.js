/**
 * 多进程服务
 */
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length; // cpu是几核

if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);

  // 派生子工作进程
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // 监听工作进程结束
  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${process.pid} 已退出`);
  })
} else {
  // 工作进程可以共享任何TCP连接
  // 在本例子中，共享的是 http服务器
  http.createServer((req, res) => {
    console.log(`工作进程 ${process.pid} 被访问`);
    res.writeHead(200);
    res.end('hello wrold\n');
  }).listen(3000);

  console.log(`工作进程 ${process.pid} 已启动`);
}
